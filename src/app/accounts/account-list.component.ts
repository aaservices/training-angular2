import {Component, ViewChild, Inject, Optional} from '@angular/core';
import {Account} from './account.type';
import {SearchFormComponent} from '../utils/search-form/search-form';
import {AccountListService} from './account-list.service';
import {DI_CONFIG, APP_CONFIG, AppConfig} from '../app-config';
import {BetterLogger} from '../betterLogger.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
    styleUrls: ['app/accounts/account-list.component.css'],
    providers: [
        AccountListService,
        {
            provide: APP_CONFIG,
            useValue: DI_CONFIG
        }
    ]
})


export class AccountListComponent {
    @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
    private errorMessage: string;
    private accounts: Account[] = [];
    private searchTermStream = new BehaviorSubject<string>('');
    private listVisibility: boolean;
    private selectedAccount: Account | null;

    constructor(
        private accountListService: AccountListService,
        @Optional() private logger: BetterLogger,
        @Inject(APP_CONFIG) appConfig: AppConfig
    ) {
        if (this.logger) {
            this.logger.log('AppConfig ' + appConfig.apiEndpoint);
        }

        this.getAccounts();

        this.listVisibility = true;

        this.initSearchTerm();
    }

    initSearchTerm() {
        this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(
                searchTerm => {
                    if (!searchTerm) {
                        return;
                    }

                    return this.accountListService.getAccounts(searchTerm).subscribe(
                        accounts => this.accounts = accounts,
                        error => this.errorMessage = error
                    );
                }
            );

    }

    getAccounts(searchTerm?: string) {
        return this.accountListService.getAccounts(searchTerm)
            .subscribe(
                accounts => this.accounts = accounts,
                error => this.errorMessage = error
            );
    }

    toggleList(): void {
        this.listVisibility = !this.listVisibility;
    }

    clearFilter(): void {
        this.searchForm.clear();
        this.clearSelectedAccount();
    }

    selectAccount(account: Account): void {
        this.selectedAccount = account;
    }

    clearSelectedAccount(): void {
        this.selectedAccount = null;
    }

    search(searchTerm: string): void {
        this.searchTermStream.next(searchTerm);
    }
}

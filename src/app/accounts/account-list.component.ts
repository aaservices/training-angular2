import {Component, ViewChild, Inject, Optional} from '@angular/core';
import {Account} from './account.type';
import {SearchFormComponent} from '../utils/search-form/search-form';
import {AccountListService} from './account-list.service';
import {DI_CONFIG, APP_CONFIG, AppConfig} from '../app-config';
import {BetterLogger} from '../betterLogger.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import {Card} from './card.type';

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
    private cards: Card[] = [];
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

        this.getAllData();

        this.listVisibility = true;

    }

    getAllData() {
        this.accountListService.getAllData()
            .subscribe(
                data => this.handleData(data),
                error => console.error(error)
            );
    }

    getAccounts(searchTerm?: string) {
        return this.accountListService.getAccounts(searchTerm)
            .subscribe(
                accounts => this.accounts = accounts,
                error => this.errorMessage = error
            );
    }

    handleData(data: any) {
        this.accounts = data[0];
        this.cards = data[1];
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
        this.getAccounts(searchTerm);
    }
}

import {Component, ViewChild, Inject, Optional} from '@angular/core';
import {Account} from './account.type';
import {SearchFormComponent} from '../utils/search-form/search-form';
import {AccountListService} from './account-list.service';
import {DI_CONFIG, APP_CONFIG, AppConfig} from '../app-config';
import {BetterLogger} from '../betterLogger.service';

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
    private accounts: Array<Account>;
    private searchTerm: string;
    private listVisibility: boolean;
    private selectedAccount: Account | null;

    constructor(
        private accountListService: AccountListService,
        @Optional() private logger: BetterLogger,
        @Inject(APP_CONFIG) appConfig: AppConfig
    ) {
        if (this.logger) {
            debugger;
            this.logger.log('AppConfig ' + appConfig.apiEndpoint);
        }
        this.accounts = accountListService.getAccountList();
        this.listVisibility = true;
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
        this.searchTerm = searchTerm;
    }
}

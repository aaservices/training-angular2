import {Component, ViewChild, Inject, Optional} from '@angular/core';
import {Account} from './account.type';
import {SearchFormComponent} from '../utils/search-form/search-form';
import {AccountListService} from './account-list.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
    styleUrls: ['app/accounts/account-list.component.css'],
    providers: [ AccountListService ]
})


export class AccountListComponent {
    @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
    private errorMessage: string;
    private accounts: Observable<Account[]>;
    private searchTerm: string;
    private listVisibility: boolean;
    private selectedAccount: Account | null;

    constructor(private accountListService: AccountListService) {
        this.getAccounts();
        this.listVisibility = true;
    }

    getAccounts() {
        this.accounts = this.accountListService.getAccounts();
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

import { Component, ViewChild } from '@angular/core';
import { Account } from './account.type';
import { SearchFormComponent } from '../utils/search-form/search-form';
import {AccountListService} from './account-list.service';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
    styleUrls: ['app/accounts/account-list.component.css'],
    providers:[AccountListService]
})
export class AccountListComponent {
    @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
    private accounts: Array<Account>;
    private searchTerm: string;
    private listVisibility: boolean;
    private selectedAccount: Account | null;

    constructor(private accountListService:AccountListService) {
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

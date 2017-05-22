import { Component } from '@angular/core';
import { Account } from './account.type';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html'
})
export class AccountListComponent {
    private accounts: Array<Account>;
    private viewAccounts: Array<Account>;
    private searchTerm: string;
    private listVisibility: boolean;

    constructor() {
        this.accounts = [
            new Account('Savings account', 300),
            new Account('Current account', 500, 'Work expenses')
        ];
        this.viewAccounts = this.accounts;

        this.listVisibility = true;
    }

    toggleList(): void {
        this.listVisibility = !this.listVisibility;
    }

    filterAccounts(): void {
        if (this.searchTerm) {
            this.viewAccounts = this.accounts.filter((element: Account) => {
                return element.name.indexOf(this.searchTerm) >= 0;
            });
        } else {
            this.viewAccounts = this.accounts;
        }
    }

    clearSearch(): void {
        this.searchTerm = '';
        this.viewAccounts = this.accounts;
    }
}

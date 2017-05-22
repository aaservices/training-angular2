import { Component } from '@angular/core';
import { Account } from './account.type';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html'
})
export class AccountListComponent {
    private accounts: Array<Account>;
    private searchTerm: string;
    private listVisibility: boolean;

    constructor() {
        this.accounts = [
            new Account('Savings account', 300),
            new Account('Current account', 500, 'Work expenses')
        ];

        this.listVisibility = true;
    }

    toggleList(): void {
        this.listVisibility = !this.listVisibility;
    }

    clearSearch(): void {
        this.searchTerm = '';
    }
}

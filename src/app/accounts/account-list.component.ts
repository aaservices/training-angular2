import { Component } from '@angular/core';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html'
})
export class AccountListComponent {
    private accounts: Array<{ name: string, price: string }>;
    private searchTerm: string;
    private listVisibility: boolean;

    constructor() {
        this.accounts = [
            {
                name: 'Savings account',
                price: '23'
            },
            {
                name: 'Current account',
                price: '54'
            }
        ];

        this.listVisibility = true;
    }

    toggleList(): void {
        this.listVisibility = !this.listVisibility;
    }
}

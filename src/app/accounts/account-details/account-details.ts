import { Account } from './../account.type';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'account-details',
    templateUrl: './account-details.html'
})
export class AccountDetailsComponent {
    @Input() account: Account;
}

import { Account } from './../account.type';
import { AccountListComponent } from './../account-list.component';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'account-list-item',
    templateUrl: 'app/accounts/account-list-item/account-list-item.html'
})
export class AccountListItemComponent {
    @Input() account: Account;
}

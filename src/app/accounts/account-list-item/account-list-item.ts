import { Account } from './../account.type';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'account-list-item',
    templateUrl: './account-list-item.html'
})
export class AccountListItemComponent {
    @Input() private account: Account;
    @Output() private accountSelect = new EventEmitter<Account>();

    selectAccount(selectedAccount: Account){
        this.accountSelect.emit(selectedAccount);
    }
}

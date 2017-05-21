import { Component } from '@angular/core';
import { Account } from './account';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html'
})
export class AccountListComponent extends Account {
    constructor() {
        super(4);
        console.log(this.getId());
    }
}

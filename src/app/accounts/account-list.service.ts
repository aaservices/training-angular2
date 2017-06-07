import {Injectable} from '@angular/core';
import {Account} from './account.type';

@Injectable()
export class AccountListService {

    constructor(){}

    getAccountList() {
        return [
            new Account('Savings account', 300),
            new Account('Current account', 500, 'Work expenses'),
            new Account('Loan', -200)
        ];
    }
}

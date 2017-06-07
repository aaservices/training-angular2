import {Injectable} from '@angular/core';
import {ACCOUNTS} from './mock-accounts'

@Injectable()
export class AccountListService {

    constructor(){}

    getAccountList() {
        return ACCOUNTS;
    }
}

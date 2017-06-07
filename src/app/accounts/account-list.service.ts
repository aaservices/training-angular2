import {Injectable} from '@angular/core';
import {ACCOUNTS} from './mock-accounts';
import {Logger} from '../logger.service';

@Injectable()
export class AccountListService {

    constructor(private logger:Logger, private isAuthorised:boolean){}

    getAccountList() {
        this.logger.log('Please wait while we retrieve your Accounts');
        return ACCOUNTS.filter(value => {
            return this.isAuthorised ? true : value.privacy === this.isAuthorised
        });
    }
}

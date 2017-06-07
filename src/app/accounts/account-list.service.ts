import {ACCOUNTS} from './mock-accounts';
import {Logger} from '../logger.service';

export class AccountListService {

    constructor(private logger:Logger){}

    getAccountList() {
        this.logger.log('Please wait while we retrieve your Accounts');
        return ACCOUNTS;
    }
}

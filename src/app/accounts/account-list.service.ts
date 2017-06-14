import {Injectable, Optional} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Account} from './account.type';

@Injectable()
export class AccountListService {

    private accountsUrl = 'http://localhost:3004/accounts';  // URL to web API

    constructor(
        @Optional() private http: Http
    ) {

    }

    getAccounts(): Promise<Account[]> {
        return this.http.get(this.accountsUrl)
            .map(this.extractData)
            .toPromise()
            .catch(this.handleError);
    }

    private extractData(res: Response): Account[] {
        return res.json().data || res.json() || { };
    }

    private handleError (error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

import {Injectable, Optional} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

import {Account} from './account.type';

@Injectable()
export class AccountListService {

    private accountsUrl = 'http://localhost:3004/accounts';  // URL to web API

    constructor(
        @Optional() private http: Http
    ) {

    }

    getAccounts(term: string): Promise<Account[]> {
        let params = new URLSearchParams();
        params.set('name', term); // the account's name value

        return this.http.get(this.accountsUrl, {search: params})
            .toPromise()
            .then(this.extractData)
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

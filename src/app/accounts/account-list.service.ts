import {Injectable, Optional} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Account} from './account.type';

@Injectable()
export class AccountListService {

    private accountsUrl = 'api/accountssssss';  // URL to web API

    constructor(
        @Optional() private http: Http
    ) {

    }

    getAccounts(): Promise<Account[]> {
        return this.http.get(this.accountsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response): Account[] {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

import {Injectable, Optional} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Account} from './account.type';

@Injectable()
export class AccountListService {

    private accountsUrl = 'api/accounts';  // URL to web API

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
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

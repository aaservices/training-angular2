import {Injectable, Optional} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Account} from '../account.type';

@Injectable()
export class AccountListService {

    private accountsUrl = 'http://localhost:3004/accounts';  // URL to web API

    constructor(
        @Optional() private http: Http
    ) {

    }

    getAccount(id: string): Observable<Account> {
        return this.http.get(`${this.accountsUrl}/${id}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getAccounts(term?: string): Observable<Account[]> {
        let params = new URLSearchParams();
        params.set('q', term); // the account's name value

        return this.http.get(this.accountsUrl, {search: params})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response): Account[] {
        return res.json().data || res.json() || { };
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

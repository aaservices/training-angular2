import {Injectable, Optional} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/forkJoin';

import {Account} from './account.type';
import {Card} from './card.type';

@Injectable()
export class AccountListService {

    private accountsUrl = 'api/accounts';  // URL to web API
    private cardsUrl = 'api/cards';  // URL to web API

    constructor(
        @Optional() private http: Http
    ) {}


    getAllData(): Observable<Array<Card[] | Account[]>> {
        return Observable.forkJoin(
            this.getAccounts(),
            this.getCards(),
        );
    }

    getAccounts(term?: string): Observable<Account[]> {
        let params = new URLSearchParams();
        params.set('name', term); // the account's name value

        return this.http.get(this.accountsUrl, {search: params})
            .map(this.extractData)
            .catch(this.handleError);
    }

    getCards(term?: string): Observable<Card[]> {
        let params = new URLSearchParams();
        params.set('name', term); // the account's name value

        return this.http.get(this.cardsUrl, {search: params})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response): Account[] | Card[] {
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

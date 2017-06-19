import { Observable } from 'rxjs/Observable';
import { Card } from './../card.type';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CardListService } from './card-list.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

@Injectable()
export class CardResolver implements Resolve<Card> {
    constructor(
        private cardListService: CardListService,
        private router: Router
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let id = route.params['id'];
        return this.cardListService.getCard(id)
            .map(card => card ? card : this.router.navigate(['/cards']))
            .catch((error: any): Observable<null> => {
                console.log(`${error.toString()}. Redirecting to the cards list`)
                this.router.navigate(['/cards']);
                return Observable.of(null);
            });
    }
}

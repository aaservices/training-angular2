import {Component, ViewChild} from '@angular/core';
import {Card} from './card.type';
import {SearchFormComponent} from '../utils/search-form/search-form';
import {CardListService} from './services/card-list.service';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
    selector: 'card-list',
    templateUrl: 'app/cards/card-list.component.html',
    styleUrls: ['app/cards/card-list.component.css'],
    providers: [ CardListService ]
})


export class CardListComponent {
    @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
    private cards: Observable<Card[]>;
    private searchTermStream = new BehaviorSubject<string>('');
    private listVisibility: boolean;
    private selectedCard: Card | null;

    constructor(private cardListService: CardListService) {
        this.getCards();
        this.listVisibility = true;
        this.initSearchTerm();
    }

    initSearchTerm() {
        this.searchTermStream
            .subscribe(
                searchTerm => {
                    this.cards = this.cardListService.getCards(searchTerm);
                }
            );
    }

    getCards(searchTerm?: string) {
        this.cards = this.cardListService.getCards(searchTerm);
    }

    toggleList(): void {
        this.listVisibility = !this.listVisibility;
    }

    clearFilter(): void {
        this.searchForm.clear();
        this.clearSelectedCard();
    }

    selectCard(card: Card): void {
        this.selectedCard = card;
    }

    clearSelectedCard(): void {
        this.selectedCard = null;
    }

    search(searchTerm: string): void {
        if (!searchTerm) {
            return;
        }

        this.searchTermStream.next(searchTerm);
    }
}

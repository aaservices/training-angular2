import { Card } from './../card.type';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'card-list-item',
    templateUrl: './card-list-item.html'
})
export class CardListItemComponent {
    @Input() private card: Card;
    @Output() private cardSelect = new EventEmitter<Card>();

    selectCard(selectedCard: Card){
        this.cardSelect.emit(selectedCard);
    }
}

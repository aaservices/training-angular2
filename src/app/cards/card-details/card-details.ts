import { Card } from './../card.type';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-details',
    templateUrl: './card-details.html'
})
export class CardDetailsComponent {
    @Input() card: Card;
}

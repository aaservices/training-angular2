import {Card} from './../card.type';
import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'card-details',
    templateUrl: './card-details.html'
})
export class CardDetailsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    @Input() card: Card;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(
            (data: { card: Card }) => this.card = data.card
        );
    }

    ngOnChanges() {
        console.log('on changes');
    }

    ngAfterViewInit() {
        console.log('after view init');
    }

    ngOnDestroy() {
        console.log('on destroy');
    }

    goToNext() {
        this.router.navigate(['/cards', parseInt(this.card.id, 0) + 1]);
    }

    goToPrev() {
        if (parseInt(this.card.id, 0) === 1) {
            return;
        }

        this.router.navigate(['/cards', parseInt(this.card.id, 0) - 1]);
    }
}

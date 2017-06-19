import { Account } from './../account.type';
import { Component, Input, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'account-details',
    templateUrl: './account-details.html'
})
export class AccountDetailsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    @Input() account: Account;

    ngOnInit() {
        console.log('on init');
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
}

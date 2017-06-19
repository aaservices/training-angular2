import { Account } from './../account.type';
import { Component, Input, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountListService} from '../services/account-list.service';

@Component({
    selector: 'account-details',
    templateUrl: './account-details.html'
})
export class AccountDetailsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    @Input() account: Account;
    private id: string;
    private nextId: number;
    constructor(
        private route: ActivatedRoute,
        private accountService: AccountListService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.accountService.getAccount(this.id)
            .subscribe(
                account => this.account = account
            );
        this.nextId = parseInt(this.id, 0);
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

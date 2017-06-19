import { Account } from './../account.type';
import { Component, Input, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountListService} from '../services/account-list.service';
import 'rxjs/add/operator/do';

@Component({
    selector: 'account-details',
    templateUrl: './account-details.html'
})
export class AccountDetailsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    @Input() account: Account;
    private id: string;
    private prevId: number;
    private nextId: number;
    constructor(
        private route: ActivatedRoute,
        private accountService: AccountListService
    ) {}

    ngOnInit() {
        this.route.params.map(params => params['id'])
            .do(id => this.id = id)
            .subscribe(
                id => {
                    this.accountService.getAccount(this.id)
                        .subscribe(
                            account => this.account = account
                        );
                    this.prevId = parseInt(this.id, 0) - 1;
                    this.nextId = parseInt(this.id, 0) + 1;
                }
            );

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

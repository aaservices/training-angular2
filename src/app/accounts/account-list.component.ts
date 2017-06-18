import {Component, ViewChild} from '@angular/core';
import {Account} from './account.type';
import {SearchFormComponent} from '../utils/search-form/search-form';
import {AccountListService} from './services/account-list.service';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
    styleUrls: ['app/accounts/account-list.component.css'],
    providers: [ AccountListService ]
})


export class AccountListComponent {
    @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
    private accounts: Observable<Account[]>;
    private searchTermStream = new BehaviorSubject<string>('');
    private listVisibility: boolean;
    private selectedAccount: Account | null;

    constructor(private accountListService: AccountListService) {
        this.getAccounts();
        this.listVisibility = true;
        this.initSearchTerm();
    }

    initSearchTerm() {
        this.searchTermStream
            .subscribe(
                searchTerm => {
                    this.accounts = this.accountListService.getAccounts(searchTerm);
                }
            );
    }

    getAccounts(searchTerm?: string) {
        this.accounts = this.accountListService.getAccounts(searchTerm);
    }

    toggleList(): void {
        this.listVisibility = !this.listVisibility;
    }

    clearFilter(): void {
        this.searchForm.clear();
        this.clearSelectedAccount();
    }

    selectAccount(account: Account): void {
        this.selectedAccount = account;
    }

    clearSelectedAccount(): void {
        this.selectedAccount = null;
    }

    search(searchTerm: string): void {
        if (!searchTerm) {
            return;
        }

        this.searchTermStream.next(searchTerm);
    }
}

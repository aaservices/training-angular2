import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts/account-list.component';
import { AccountListItemComponent } from './accounts/account-list-item/account-list-item';
import { AccountDetailsComponent } from './accounts/account-details/account-details';
import { SearchFormComponent } from './utils/search-form/search-form';
import { AccountFilterPipe } from './accounts/account-filter.pipe';
import {AccountListService} from './accounts/account-list.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        AccountListComponent,
        AccountListItemComponent,
        AccountDetailsComponent,
        AccountFilterPipe,
        SearchFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

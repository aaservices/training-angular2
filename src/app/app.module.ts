import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts/account-list.component';
import { AccountListItemComponent } from './accounts/account-list-item/account-list-item';
import { AccountDetailsComponent } from './accounts/account-details/account-details';
import { AccountFilterPipe } from './accounts/account-filter.pipe';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        AccountListComponent,
        AccountListItemComponent,
        AccountDetailsComponent,
        AccountFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

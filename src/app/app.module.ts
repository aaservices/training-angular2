import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts/account-list.component';
import { AccountListItemComponent } from './accounts/account-list-item/account-list-item';
import { AccountDetailsComponent } from './accounts/account-details/account-details';
import { SearchFormComponent } from './utils/search-form/search-form';
import { AccountFilterPipe } from './accounts/account-filter.pipe';
import { Logger } from './logger.service';
import { AccountListService } from './accounts/account-list.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AccountListComponent,
        AccountListItemComponent,
        AccountDetailsComponent,
        AccountFilterPipe,
        SearchFormComponent
    ],
    bootstrap: [AppComponent],
    providers: [Logger, AccountListService]
})
export class AppModule { }

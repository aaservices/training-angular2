import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// only for demo purposes
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from './data-service/InMemoryDataService';

import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts/account-list.component';
import { AccountListItemComponent } from './accounts/account-list-item/account-list-item';
import { AccountDetailsComponent } from './accounts/account-details/account-details';
import { SearchFormComponent } from './utils/search-form/search-form';
import { AccountFilterPipe } from './accounts/account-filter.pipe';
import { Logger } from './logger.service';
import { AccountListService } from './accounts/account-list.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        InMemoryWebApiModule.forRoot(InMemDataService) // only for demo purposes
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

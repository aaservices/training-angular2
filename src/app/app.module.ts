import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts/account-list.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AccountListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

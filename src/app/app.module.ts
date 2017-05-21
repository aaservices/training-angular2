import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts/account-list.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        AccountListComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

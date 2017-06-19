import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountDetailsComponent} from './accounts/account-details/account-details';
import {AccountListComponent} from './accounts/account-list.component';
import {AccountListItemComponent} from './accounts/account-list-item/account-list-item';
import {AccountFilterPipe} from './accounts/filters/account-filter.pipe';
import {SearchFormComponent} from './utils/search-form/search-form';
import {AccountListService} from './accounts/services/account-list.service';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'accounts'},
    {path: 'accounts', component: AccountListComponent},
    {path: 'accounts/:id', component: AccountDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routableComponents = [
    AccountListComponent,
    AccountListItemComponent,
    AccountDetailsComponent,
    AccountFilterPipe,
    SearchFormComponent
];

export const routableServices = [
    AccountListService
];

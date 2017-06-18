import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './accounts/account-details/account-details';
import { AccountListComponent } from './accounts/account-list.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'accounts'},
    { path: 'accounts', component: AccountListComponent},
    { path: 'accounts/:id', component: AccountDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

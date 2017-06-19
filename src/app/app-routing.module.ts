import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountDetailsComponent} from './accounts/account-details/account-details';
import {AccountListComponent} from './accounts/account-list.component';
import {AccountFilterPipe} from './accounts/filters/account-filter.pipe';
import {SearchFormComponent} from './utils/search-form/search-form';
import {AccountListService} from './accounts/services/account-list.service';
import {PageNotFoundComponent} from './pages/page-not-found.component';
import {CardDetailsComponent} from './cards/card-details/card-details';
import {CardListComponent} from './cards/card-list/card-list.component';
import {CardResolver} from './cards/services/card-resolver.service';
import {CardListService} from './cards/services/card-list.service';
import {CardsComponent} from './cards/cards.component';
import {AuthGuard} from './auth/services/auth-guard.service';
import {AuthService} from './auth/services/auth.service';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'accounts'},
    {path: 'accounts', component: AccountListComponent},
    {path: 'accounts/:id', component: AccountDetailsComponent},
    {
        path: 'cards',
        component: CardsComponent,
        children: [
            {
                path: '',
                component: CardListComponent
            },
            {
                path: ':id',
                component: CardDetailsComponent,
                canActivate: [AuthGuard],
                resolve: {
                    card: CardResolver
                }
            }
        ]
    },
    {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routableComponents = [
    AccountListComponent,
    AccountDetailsComponent,
    AccountFilterPipe,
    CardsComponent,
    CardListComponent,
    CardDetailsComponent,
    SearchFormComponent,
    PageNotFoundComponent
];

export const routableServices = [
    AccountListService,
    CardListService,
    CardResolver,
    AuthService,
    AuthGuard
];

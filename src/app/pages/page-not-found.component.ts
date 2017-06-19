import {Component} from '@angular/core';

@Component({
    selector: 'page-not-found',
    template: `
        <h1>Error 404</h1>
        <div>The page you requested was not found</div>
        <div>Sorry :(</div>
    `
})
export class PageNotFoundComponent {
}

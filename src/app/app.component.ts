import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    // templateUrl: 'app/app.component.html',
    template: `<h1>Hello {{name}},</h1>`,
    // styleUrls: ['app/app.component.css']
})
export class AppComponent {
    name: string = '';

    constructor() {
        this.name = 'Learning Actors';
    }
}

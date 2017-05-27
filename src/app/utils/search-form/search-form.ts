import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search-form',
    templateUrl: './search-form.html'
})
export class SearchFormComponent {
    @Output() changed: EventEmitter<string>;
    private term: string;

    constructor() {
        this.changed = new EventEmitter()
        this.clear();
    }

    filterChanged(event: Event) {
        event.preventDefault();
        debugger;
        this.changed.emit(this.term);
    }

    clear(): void {
        debugger;
        this.term = '';
        this.changed.emit(this.term);
    }
}

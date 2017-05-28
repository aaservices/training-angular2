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
        this.changed.emit(this.term);
    }

    clear(): void {
        this.term = '';
        this.changed.emit(this.term);
    }
}

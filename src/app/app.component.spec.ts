import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, Component }    from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'account-list',
    template: `This is a test`
})
class TestAccountListComponent {}

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent, TestAccountListComponent ], // declare the test component
            providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);

        component = fixture.componentInstance; // AppComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should display the original name', () => {
        expect(el.textContent).toContain('Learning Actors');
    });

    it('should update if the name changes', () => {
        component.name = 'New name';
        fixture.detectChanges();
        expect(el.textContent).toContain('New name');
    });
});

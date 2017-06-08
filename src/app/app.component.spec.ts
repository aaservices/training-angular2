import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ], // declare the test component
            providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
        });

        fixture = TestBed.createComponent(AppComponent);

        component = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        console.log(de);
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

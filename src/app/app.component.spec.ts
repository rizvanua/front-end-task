import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {RouterOutlet } from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HomeComponent} from "./home/home.component";
import {By} from "@angular/platform-browser";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [])
      ]

    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(app).not.toBeNull();
  }));


});

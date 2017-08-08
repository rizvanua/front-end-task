import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {SearchComponent} from "../search/search.component";
import {OutputComponent} from "../output/output.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {ObserveService} from "../services/Observe";
import {HttpService} from "../services/HttpService";
import {HttpModule} from "@angular/http";
import {SimpleformComponent} from "../simpleform/simpleform.component";
import {FormsModule} from "@angular/forms";



describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,SearchComponent,OutputComponent,SimpleformComponent],
      providers: [
        HttpService,
        ObserveService
      ],
      imports: [
        HttpModule,
        FormsModule,
        RouterTestingModule.withRoutes(
          [])
      ]
    });
  }));

  it('should create the HomeComponent', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  }));

});

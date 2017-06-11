import { TestBed, async } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {By} from "@angular/platform-browser";
import {HttpService} from "../services/HttpService";
import {Http, HttpModule, BaseRequestOptions} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {ObserveService} from "../services/Observe";


describe('SearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        HttpModule
      ],
      providers: [
        HttpService,
        ObserveService
      ]
    });
  }));

  it('should create the SearchComponent', async(() => {
    const fixture = TestBed.createComponent(SearchComponent);
    const search = fixture.debugElement.componentInstance;
    expect(search).toBeTruthy();
  }));


});

import { TestBed, async } from '@angular/core/testing';


import {By} from "@angular/platform-browser";
import {HttpService} from "../services/HttpService";
import {Http, HttpModule, BaseRequestOptions} from '@angular/http';
import {ObserveService} from "../services/Observe";
import {OutputComponent} from "./output.component";
import {RouterTestingModule} from "@angular/router/testing";


describe('OutputComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutputComponent],
      providers: [
        HttpService,
        ObserveService
      ],
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes(
          [])
      ]
    });
  }));

  it('should create the OutputComponent', async(() => {
    const fixture = TestBed.createComponent(OutputComponent);
    const output = fixture.debugElement.componentInstance;
    expect(output).toBeTruthy();
  }));

});

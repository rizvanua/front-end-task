import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleformComponent } from './simpleform.component';
import {FormsModule, NgForm} from "@angular/forms";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('SimpleformComponent', () => {
  let component: SimpleformComponent;
  let fixture: ComponentFixture<SimpleformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleformComponent],
      imports:[FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //component.f=new FormsModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    let form=component.slForm;
    let value = form.value;
    value.firstName='Roman';
    value.lastName='Ivanitskyi';
    component.submitForm(form);
    expect(value.firstName).toEqual('Roman');
  });

});

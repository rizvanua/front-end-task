import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  @ViewChild('f') slForm:NgForm

  constructor() { }

  ngOnInit() {
  }

  public submitForm(form:NgForm):any {
    const value = form.value;
    const userData={firstName:value.firstName,lastName:value.lasttName, aboutUser:value.aboutUser};
    console.log(userData);
  }
  public onClear(){
    this.slForm.reset();
  }

}

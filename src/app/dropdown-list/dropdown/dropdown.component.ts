import {Component, OnInit, OnChanges,ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnChanges {
  public contries = [
    {value:1, name:"Afghanistan"},
    {value:2, name:"Albania"},
    {value:3, name:"Indonezia"},
    {value:4, name:"Zimbabwe"}
  ];

  constructor() { }
  ngOnChanges(){

  }
  ngOnInit() {
  }
public myAlert(item){
  console.log(item);
}
  public click(e){
    console.log(e);
  }

}

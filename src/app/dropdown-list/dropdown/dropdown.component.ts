import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  public contries = [
    {value:1, name:"Afghanistan"},
    {value:2, name:"Albania"},
    {value:3, name:"Indonezia"},
    {value:4, name:"Zimbabwe"}
  ];
  constructor() { }

  ngOnInit() {
  }

}

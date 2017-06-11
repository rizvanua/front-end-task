import {Component, OnInit,AfterContentInit} from '@angular/core';
import {ActivatedRoute, Params, Data} from "@angular/router";

import {PassClickService} from "../services/PassClickService";
import * as _ from 'underscore';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit,AfterContentInit{
  name:any;
  blobData:any;
  public _:any=_;
constructor(private route: ActivatedRoute, private PassClickService:PassClickService){}
  ngOnInit(){

this.route.params.
  subscribe(
  (params:Params)=>{
      this.name=params['name']
    //console.log(params);
  }
);
    this.route.data.subscribe(
      (data:Data)=>{


        console.log(data['data']);
      }
    );

  }
  ngAfterContentInit(){

  }

}

import {Component, OnInit,AfterContentInit} from '@angular/core';
import {ActivatedRoute, Params, Data} from "@angular/router";
import {HttpService} from "../services/HttpService";

import * as _ from 'underscore';
import {Page} from "./page.model";


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit,AfterContentInit{
  public id:any;
  public blobData:Page;
  public _:any=_;
  public dataObj={};
constructor(private route: ActivatedRoute, private HttpService: HttpService){

};

  ngOnInit(){

this.route.params.
  subscribe(
  (params:Params)=>{
      this.id=params['id'];
    this.HttpService.getOneRep(this.id).subscribe(
      (resp:any)=>{
        this.blobData=new Page(resp.id, resp.name, resp.url, resp.description);
        this.dataObj=this.blobData;
      },
      (error)=>console.log(error)
    );

  }
);
    this.route.data.subscribe(
      (data:Data)=>{
        //console.log(data['data']);
      }
    );

  }
  ngAfterContentInit(){

  }

}

import { Component } from '@angular/core';
import {HttpService} from "../services/HttpService";
import {ObserveService} from "../services/Observe";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  //public input:any='';
  constructor(private HttpService:HttpService, private ObserveService:ObserveService){

  }
  searchData(input){
    //console.log(input.value);
    if(input.value.length>0)
    this.HttpService.getData(input.value)
      .subscribe(
        (servers:any)=>{
          this.ObserveService.ObserveData.next(servers.items);
          servers.items;
          },
        (error)=>console.log(error)
      );
  }
}

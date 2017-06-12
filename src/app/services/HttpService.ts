/**
 * Created by Roman on 02.05.2017.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class HttpService{
  constructor(private http:Http){}
  array:any;
  getData(input){
    return this.http.get(`https://api.github.com/search/repositories`,{ search: `q=${input}&sort=stars&order=desc` })
      .map(
        (response:Response)=>{
          const data =response.json();
          this.array=data;
          return data;
        }
      );

  }
  getOneRep(id){
    return this.http.get(`https://api.github.com/repositories/${id}`).map(
      (response:Response)=>{
        const data =response.json();
        this.array=data;
        return data;
      }
    );
  }
  arrayData(){
    return this.array;
    //console.log();
  }
}

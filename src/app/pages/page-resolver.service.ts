import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ObserveService} from "../services/Observe";
import {HttpService} from "../services/HttpService";

/**
 * Created by Roman on 17.05.2017.
 */
interface Page{
  data:any
}
@Injectable()
export class PageResolver implements Resolve<Page>{
  data:any;
  constructor(private ObserveService:ObserveService, private HttpService:HttpService){}
  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Page>|Page{
    //console.log(this.ObserveService.ObserveData);
    return this.HttpService.arrayData();
    /*this.ObserveService.ObserveData.subscribe((data:any)=>{
      console.log(data);
      this.data=data;
    });
      return this.data;*/
  }
}

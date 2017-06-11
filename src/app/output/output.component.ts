import {Component, OnInit} from '@angular/core';
import {ObserveService} from "../services/Observe";
import * as moment from 'moment';



@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{
  public blocks:any[]=[];
  constructor(private ObserveService:ObserveService){}
  ngOnInit(){
    this.ObserveService.ObserveData.subscribe((data:any)=>{
      console.log();
      this.blocks=data;
    });

  }


  checkLenght(){
    if(this.blocks.length>0){
      return true;
    }
    else{
      return false;
    }

  }
  momentConv(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }
}

import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public blocks:any[]=[];
  constructor(){}
  ngOnInit(){

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

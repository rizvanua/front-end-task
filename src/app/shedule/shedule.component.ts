import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import * as jQuery from 'jquery';
import "fullcalendar";

@Component({
  selector: 'app-shedule',
  template: '<ng-content></ng-content>',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent implements OnInit,AfterViewInit{
  calendarElement: any;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.calendarElement = jQuery(this.elementRef.nativeElement);
    this.calendarElement.fullCalendar({
      events: [
        {
          id:1,
          title  : 'event01',
          start  : '2017-08-08'
        },
        {
          id:8,
          title  : 'event22',
          start  : '2017-08-09'
        },
        {
          id:80,
          title  : 'event225',
          start  : '2017-08-10'
        }
        ]
    });
    function remove (){this.calendarElement.fullCalendar('removeEvents',[9]);}
    setTimeout(()=>{this.calendarElement.fullCalendar('removeEvents',[8])},2000);

  }

}

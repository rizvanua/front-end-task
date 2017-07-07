import {Directive, ElementRef, Renderer2, OnInit} from '@angular/core';
import {Input} from "@angular/core";

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective implements OnInit{
  @Input('appSelected') set selectState(conditional: boolean){
    if(conditional){
      this.renderer.setAttribute(this.elementRef.nativeElement,'selected','true');
    }
  };

  constructor(  private elementRef: ElementRef, private renderer :Renderer2) {
    console.log(this.elementRef.nativeElement);
    console.log(this.renderer);
  }
  public ngOnInit(){

  }
}

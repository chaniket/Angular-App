import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreenEl]'
})
export class GreenElDirective {

  constructor(el: ElementRef) {
    //debugger;
    console.log(el.nativeElement.html);
    el.nativeElement.style.color = "green";
    el.nativeElement.outerText = "Hey Details are changed green";
    el.nativeElement.style.color = "green";
    
  }

}

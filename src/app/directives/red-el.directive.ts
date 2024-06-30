import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el:ElementRef) {
    debugger;
    el.nativeElement.style.color = 'green';
    el.nativeElement.outerText = "Hey Details are changed red";
   }

  
}

import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
  inputs: ['clearanceItem'],
  outputs: ['buyEvent']
})
export class InputOutputComponent implements OnInit {

  @Input() item!: any;
  @Output() deleteRequest = new EventEmitter<string>();

  deleteRequestOne(item: string) {
    debugger;
    console.log("deleteRequestOne " + item);
    this.deleteRequest.emit(item);
  }

  onSubmitCustomEvenet(value:string): void {
    debugger;
    const event: CustomEvent = new CustomEvent('FormSubmitOneCustomEvent', {
      bubbles: true,
      detail: { data: value }
    });

    this.elementRef.nativeElement.dispatchEvent(event);
  }

  @HostListener('FormSubmitOneCustomEvent', ['$event'])
  onCustomEventCaptured(event: any) {
    console.log('Event Received onSubmitCustomEvenet input-output ', event.detail);
  }

  constructor(private route: ActivatedRoute, private elementRef:ElementRef) {
    console.log("input - output " + this.item);
  }
  ngOnInit(): void {
    //  debugger;
    // this.deleteRequest.emit(this.item);
    console.warn("on ng " + this.route.snapshot.paramMap.get("item"));
    if (this.item == null || this.item == undefined)
      this.item = this.route.snapshot.paramMap.get("item");
  }
}

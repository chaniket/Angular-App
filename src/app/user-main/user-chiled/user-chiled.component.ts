import { Component, Input ,Output,EventEmitter, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-user-chiled',
  templateUrl: './user-chiled.component.html',
  styleUrls: ['./user-chiled.component.css']
})
export class UserChiledComponent implements OnInit {

  constructor(private elementRef: ElementRef){

  }

  @Output()
   actionB = new EventEmitter<string>();

  @Input()
  userChile:{id:number,value:string}={id:0,value:''};

  @Output('updateEventData')
  public updateEventData = new EventEmitter<string>();

  actionHandlerB(o:string){
    console.log("actionHandlerB "+o );
    this.actionB.emit(o);
  }

  alertValue(value: string) {
    window.alert(value);
    console.log("calling event emitter");
    this.updateEventData.next(value);
    window.alert(value);
  }

  onSubmitCustomEvenet(value:string): void {
    const event: CustomEvent = new CustomEvent('FormSubmitOneCustomEvent', {
      bubbles: true,
      detail: { data: value }
    });

    this.elementRef.nativeElement.dispatchEvent(event);
  }

  ngOnInit(): void {
      
  }

}

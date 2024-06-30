import { Component, OnInit,Output,EventEmitter, HostListener } from '@angular/core';
import { UserChiledComponent } from './user-chiled/user-chiled.component';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit{

@Output()
 actionA = new EventEmitter();

userMain:string = "from UserMainComponent";

@Output()
updateEventDataApp = new EventEmitter<string>();

actionHandlerA(item:string) {
  console.log("actionHandlerA "+item);
  this.actionA.emit(item);
}

  ngOnInit(): void {
    
  }
  //{id:number,value:string}={id:0,value:''}
  list: any[] = [{id:1,value:"Aniket"}, { id: 2, value: "Chavan" }];
  //list: any[] = [   { id: 1, value: "Aniket" }, { id: 2, value: "Chavan" },     { id: 3, value: "Patil" }, { id: 4, value: "Chikhalthankar" },   { id: 5, value: "Kannad" }, { id: 6, value: "Chatrapati Sambhajinagar" } ];

  updateData(item:string){
    window.alert("main "+item);
  }

  @HostListener('FormSubmitOneCustomEvent', ['$event'])
      onCustomEventCaptured(event: any) {
        console.log('Event Received UserMainComponent ', event.detail);
      }

}

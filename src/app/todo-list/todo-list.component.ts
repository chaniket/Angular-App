import { Component } from '@angular/core';
import { identity } from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  removeTask(taskId: number) {
  //  window.alert(taskId);
    console.log(this.list.filter(task => task.id == taskId).map(task => JSON.stringify(task)))
    
    this.list.filter(task => task.id == taskId).map(task => task).forEach(element => {
      console.log("Removing the id - "+element.id+", name - "+element.name);
    });

//    this.list.forEach(element => { console.log(element.id+ '\t\t'+element.name); });
    ;
   this.list = this.list.filter(task => task.id != taskId).map(task => task);
   //this.list = this.list.filter(task => task.id != taskId);
  }
  tasks: any = [];
  count: number = 0;
  list: any[] = [{id:1,name:"Aniket"}
    ,{id:2,name:"Chavan"}
    ,{id:3,name:"Patil"}
    ,{id:4,name:"Chikhalthankar"}
    ,{id:5,name:"Kannad"}
    ,{id:6,name:"Chatrapati Sambhajinagar"}
  ];
  textValue="Aniket";
  addTask(task: string) {
    if(task.length==0){
      window.alert("Please enter task!");
      return;
    }
    this.textValue = "";
    this.tasks[this.count++] = task;
    console.log(JSON.stringify(this.tasks));
    this.list.push({ id: this.list.length, name: task });
    console.log(JSON.stringify(this.list));
  }

}

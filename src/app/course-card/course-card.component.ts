import { Component, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})

export class CourseCardComponent {

  cardStyles() {
    return {
        'background-image' :'url('+this.courseWillGoToInput.iconUrl+')'
    };
}

makeButtonCenter(){
  return {
    "text-align":"center"
  };
}

  @Input()//this will help to take details from calling template
  courseWillGoToInput!:Course;

  @Input()//this will help to take details from calling template
  inn!:number;


  isImageAvailable(){
    return this.courseWillGoToInput.iconUrl!=null && this.courseWillGoToInput.iconUrl!="";
  }

public cardClasses() : any {
  if(this.courseWillGoToInput.category == 'BEGINNER'){
   // debugger;
    return ['beginner','course-card'];
  }
/*
  return {
    //'beginner':true,
    'beginner':this.courseWillGoToInput.category == 'BEGINNER', //apply class based on condition
    'course-card':true
  }; */
}

}
//[ngStyle]="{'text-decoration':'underline'}">
//[style.text-decoration]="'underline'">
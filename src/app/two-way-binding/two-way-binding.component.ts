import { Component } from '@angular/core';
import { LoginRequest } from '../user-auth/login/login.request';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})

export class TwoWayBindingComponent {
changeDetails(data: any) {
  console.log(data);
  this.data = data;
}

changeDetails1(data: any) {
  console.log(data);
}
user:LoginRequest = {"username":"aniket","password":"abc","enabled":"true"};
currency:number = 999;
date:Date=new Date();
data="";
  name="Aniket";
}

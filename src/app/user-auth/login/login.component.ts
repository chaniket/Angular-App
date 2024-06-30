import { Component } from '@angular/core';
import { NgForm,ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from './login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
display:boolean=false;
  toggle() {
    this.display = !this.display; 
  }

  txtusername: string ='';

  userNameEntered(arg0: string) {
    console.log(arg0);
    this.txtusername = arg0;
  }

  onSubmit(data:LoginRequest) {//any
    debugger;
    window.alert('hii from login-component.ts '+data.username+' '+JSON.stringify(data));
      console.log(data);
      console.log(data.username);
      console.log(data.password);
  }

}

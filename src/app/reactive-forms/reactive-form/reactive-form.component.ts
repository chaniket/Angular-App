import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormControlName,ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, CanActivateFn } from '@angular/router';
import { Base64ImagPipePipe } from 'src/app/pipes/base64-imag-pipe.pipe';
import { LoginRequest } from 'src/app/user-auth/login/login.request';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{
  title = 'Reactive Form';
  constructor(private sanitizer: DomSanitizer,private router: ActivatedRoute
//, private location: Location

  ) {}

  signUpForm = new FormGroup({
    username: new FormControl('aniketchavan75077@gmail.com'),
    password: new FormControl('Aniket@1')
  });
  
  passwordEncoded:string="";

  onSubmit() {
    //debugger;
    console.log(" 1 - "+this.signUpForm.value.username);
    console.log(' reactive  '+JSON.stringify(this.signUpForm.value));

    let base64String = this.signUpForm.value.password!=null?this.signUpForm.value.password:'';
    const pipe = new Base64ImagPipePipe(this.sanitizer);
   // this.passwordEncoded = pipe.transform(base64String);
    console.log(pipe.transform(base64String));
   //this.route = this.route.routeConfig?.path='reactive-dashboard';
   //this.route.routeConfig!=null?"":this.route.routeConfig.path='reactive-dashboard';   
  }

  onSubmit1(data:LoginRequest) {
   // debugger;
    window.alert('hii from login-component.ts '+data.username+' '+JSON.stringify(data));
      console.log(data);
      console.log(data.username);
      console.log(data.password);
  }
  goBack(): void {
   // this.location.back();
  }
}

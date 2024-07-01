import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, CanActivateFn } from '@angular/router';
import { Base64ImagPipePipe } from 'src/app/pipes/base64-imag-pipe.pipe';
import { LoginRequest } from 'src/app/user-auth/login/login.request';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { UserEntity } from './user-entity';
import { MdServiceService } from 'src/app/mdServices/md-service.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  header = new HttpHeaders()
    .append('Content-Type', 'application/json');
    //.append('Accept', 'application/json')
    //.append('Access-Control-Allow-Origin', ['http://localhost:8082/', 'http://localhost:4200/'])
    //.append('Access-Control-Allow-Credentials', 'true')
    //.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    //.append('Accept', '*/*');

  //.append('GET', 'POST', 'OPTIONS');

  params = new HttpParams()
    .append('param1', 'some data 1')
    .append('param2', 'some data 2');

  title = 'Reactive Form';
  constructor(private sanitizer: DomSanitizer, private router: ActivatedRoute
    , private http: HttpClient
    , private mdServices: MdServiceService

    //, private location: Location

  ) { }

  signUpForm = new FormGroup({
    username: new FormControl('aniketchavan7507@gmail.com'),
    password: new FormControl('Aniket@9112')
  });

  loginReq: LoginRequest = {} as LoginRequest;
  passwordEncoded: string = "";
  loginUrl: string = "http://localhost:8082/saga-user-service/okta/login";
  //loginUrl = "http://localhost:8093/login/loginUser";
  getAllUsers: string = "http://localhost:8082/saga-user-service/users/getAllUsers?page=0&size=10";

  userEntity: UserEntity[] = [{}];

  onSubmit() {
   // debugger;
    console.log(" 1 - " + this.signUpForm.value.username);
    console.log(' reactive  ' + JSON.stringify(this.signUpForm.value));

    let base64String = this.signUpForm.value.password != null ? this.signUpForm.value.password : '';
    const pipe = new Base64ImagPipePipe(this.sanitizer);
    // this.passwordEncoded = pipe.transform(base64String);
    console.log(pipe.transform(base64String));
    this.loginReq.username = this.signUpForm.value.username as string;
    this.loginReq.password = this.signUpForm.value.password as string;

    const body = JSON.stringify(this.loginReq);

    // this.mdServices.getUserData();
    /*  this.http.get(this.getAllUsers).subscribe((data) => {
        console.log("data " + JSON.stringify(data));
        // Parse the JSON string back to an object
      const parsedData = JSON.parse(JSON.stringify(data));
      if ('content' in parsedData) {
        const content = parsedData.content;
        this.userEntity = content;
        console.log('Content:', content);
      }
       //this.userEntity = data.content as JSON;
      }); */
    /*this.http.post(this.loginUrl, this.loginReq).subscribe((data) => {
      console.log("data " + JSON.stringify(data));
    });*/
    
    console.log("this.headers " + JSON.stringify(this.header));
    this.http.post(this.loginUrl, JSON.parse(body)
      /*, {
        headers: this.header,
        params: this.params,
      } */
    )
      .subscribe((res) =>
        console.log("Login res" + JSON.stringify(res))
      );

    //this.route = this.route.routeConfig?.path='reactive-dashboard';
    //this.route.routeConfig!=null?"":this.route.routeConfig.path='reactive-dashboard';   
  }

  onSubmit1(data: LoginRequest) {
    // debugger;
    window.alert('hii from login-component.ts ' + data.username + ' ' + JSON.stringify(data));
    console.log(data);
    console.log(data.username);
    console.log(data.password);
  }
  goBack(): void {
    // this.location.back();
  }
}

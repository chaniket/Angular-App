import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../user-auth/login/login.request';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpAuthService : HttpClient) { 

  }

  userLogin(loginRequest:LoginRequest){
    return 
  }

}

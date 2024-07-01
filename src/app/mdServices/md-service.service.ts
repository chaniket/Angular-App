import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEntity } from '../reactive-forms/reactive-form/user-entity';

export interface CompanyDetailsDto {
  companyName: string;
  address: string;
  pincode: number;
  landmark: string;
};

@Injectable({
  providedIn: 'root'
})
export class MdServiceService {
 
  companyDetails: CompanyDetailsDto[] = [
    { companyName: "Chavan Brothers", address: "Balewadi Highstreet, Vasudha building, Pune", landmark: "Balewadi Highstreet", pincode: 411027 },
  ];

  constructor(private http: HttpClient) {
    console.log(JSON.stringify(this.companyDetails));
  }

  getAllUsers: string = "http://localhost:8082/saga-user-service/users/getAllUsers?page=0&size=10";
  //getAllUsers: string = "http://localhost:8093/user/getAllUsers?page=0&size=10";
  
  headers = new HttpHeaders()
  .append('Content-Type','application/json')//if added here  unnecessary headers it will give cors errors
  .append('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJ0c2w1YUY2NW1qekI3U1VmeW9zVSJ9.eyJpc3MiOiJodHRwczovL2Rldi1kdjJjajg2Yjd5NWQ1bndqLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NjVlYjc2YzEzOWQ5ZjYzMDBiYjQyMGQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODIvbG9naW4vbG9naW5Vc2VyIiwiaWF0IjoxNzE5ODQ4MDc5LCJleHAiOjE3MTk5MzQ0NzksInNjb3BlIjoiY3JlYXRlOmNsaWVudF9ncmFudHMgZ3JhbnRfdHlwZTpjbGllbnRfY3JlZGVudGlhbHMgcmVhZDpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6bWVzc2FnZXMgY2xpZW50X2dyYW50cyBwYXNzd29yZCBBUElzLXNwcmluZy1vYXV0aDIgcGVybWlzc2lvbiBBRE1JTiBBRE1JTl9PTkUiLCJndHkiOiJwYXNzd29yZCIsImF6cCI6InV5QmFidlBkZzRBRnV5RjladW41NUU1WjI5NFpwZ3BSIn0.wTye7Id0kj460wEDLHtDOWXAOUhldw5EKGl2XUcIBkgmsKRYl0hnZqbVijpp8D_hwb5RBjdDgziRqW57iAfjH2rdIs8MJRv-jNwG-tsT8GEKnWOKduDjf6VYzSEHH-9pitegiZMLzNMiln7sqAzs1GothJA0OhUQOhnEYJhF51NkugBbMtaXwo8nDfybncrd2WeSjACoirAK7HL1GxdYY5MmRBQ5C689Ax9c3ssQhMT1mOtO1m9eBIni-dj_1-WbW3C-nuAPEEkm_M4jssLXbvqMvyhN2nXQzOy_GZJNSldAsLkdEmNA5zyKRV3zOAOeZFmUsAvHye1psrPj2RQQsg');

  //.append('GET', 'POST', 'OPTIONS');

params = new HttpParams()
  .append('param1', 'some data 1')
  .append('param2', 'some data 2');

  userEntity:UserEntity [] = [{}];

  getUserData() : UserEntity[]{
    let content=[{}];
    
    this.http.get(this.getAllUsers,{headers:this.headers}).subscribe((data: UserEntity) => {
      console.log("data " + JSON.stringify(data));
      // Parse the JSON string back to an object
    const parsedData = JSON.parse(JSON.stringify(data));
    if ('content' in parsedData) {
      content = parsedData.content;
      console.log('Content:', content);
      content.forEach(rs =>
      console.log("rs "+rs));
      this.userEntity = content;
      
      console.log("this.userEntity[0]; "+JSON.stringify(this.userEntity[0]));
    }
     //this.userEntity = data.content as JSON;
    });
    return this.userEntity;
  }

}

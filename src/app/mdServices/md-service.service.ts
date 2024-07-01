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
  
  headers = new HttpHeaders()
  .append('Content-Type','application/json')
  .append('Accept', 'application/json')
  .append('Access-Control-Allow-Origin', 'http://localhost:8082/')
  .append('Access-Control-Allow-Credentials', 'true');
  //.append('GET', 'POST', 'OPTIONS');

params = new HttpParams()
  .append('param1', 'some data 1')
  .append('param2', 'some data 2');


  userEntity:UserEntity [] = [{}];

  getData() : UserEntity[]{
    let content=[{}];
    this.http.get(this.getAllUsers).subscribe((data) => {
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

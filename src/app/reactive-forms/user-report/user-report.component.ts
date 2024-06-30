import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbAlertModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetails } from 'src/app/model/user-details';

const UserDetailsList: UserDetails[] = [
  {id:1,name:"XYZ",age:50,email:"xyz@gmail.com",phoneNo:"+91 9503750000",address:"Pune"},
  {id:2,name:"ABC",age:45,email:"abc@gmail.com",phoneNo:"+91 9823456789",address:"Mumbai"},
  {id:3,name:"John Doe",age:35,email:"johndoe@example.com",phoneNo:"+91 9123456780",address:"Delhi"},
  {id:4,name:"Jane Smith",age:28,email:"janesmith@example.com",phoneNo:"+91 9234567891",address:"Chennai"},
  {id:5,name:"Michael Brown",age:40,email:"michaelbrown@example.com",phoneNo:"+91 9345678902",address:"Kolkata"},
  {id:6,name:"Emily Davis",age:32,email:"emilydavis@example.com",phoneNo:"+91 9456789013",address:"Bangalore"},
  {id:7,name:"Chris Wilson",age:38,email:"chriswilson@example.com",phoneNo:"+91 9567890124",address:"Hyderabad"},
  {id:8,name:"Jessica Lee",age:30,email:"jessicalee@example.com",phoneNo:"+91 9678901235",address:"Ahmedabad"},
  {id:9,name:"David Kim",age:42,email:"davidkim@example.com",phoneNo:"+91 9789012346",address:"Pune"},
  {id:10,name:"Sophia Johnson",age:29,email:"sophiajohnson@example.com",phoneNo:"+91 9890123457",address:"Jaipur"}
  ];

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css', './user-details.css'],
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule, CommonModule, NgbPaginationModule
    , NgbAlertModule]
})
export class UserReportComponent implements OnInit {

  userList = UserDetailsList;
  page = 1;
  pageSize = 4;
  collectionSize = UserDetailsList.length;
  showUserDetails: UserDetails = UserDetailsList[0];

  constructor(private route: ActivatedRoute) {
    this.refreshCountries();
    console.log(JSON.stringify(this.userList));
  }

  ngOnInit(): void {
    debugger;
    let id = this.route.snapshot.paramMap.get("id");
    let id1:number = 1;
    if(id!=null || id!=undefined){
      id1 = Number(id);
    }
    console.log(" log " + this.route.snapshot.paramMap.get("id"));
    if (id != null && id != undefined) {
      this.showUserDetails = this.userList.filter(us=>us.id==id1).map(us=>us)[0];
    }
  }

  refreshCountries() {
    this.userList = UserDetailsList.map((country, i) => ({ id1: i + 1, ...country }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize,
      );
  }
  showUserDetailsFunction() {
    return this.showUserDetails == null;
  }
  deleteUser(user: UserDetails) {
    console.log(user);
  }

  updateUser(user: UserDetails) {
    debugger;
    this.showUserDetails = user;
    console.log("update user " + user);
  }

  classForText() {
    return ['classForText'];
  }

}

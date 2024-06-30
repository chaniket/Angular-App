import { Injectable } from '@angular/core';

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
  constructor() {
    console.log(JSON.stringify(this.companyDetails));
  }
}

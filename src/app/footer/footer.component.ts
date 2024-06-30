import { Component } from '@angular/core';
import { CompanyDetailsDto, MdServiceService } from '../mdServices/md-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerDetails(flag: boolean): string[] {
    return flag ? ['footer-details'] : ['footer-details-rm'];
  }
  footerInfo(flag: boolean): string[] {
    return flag ? ['footer-info'] : ['footer-info-rm'];
  }
  showCompnayDetails!: CompanyDetailsDto;
  constructor(companyDetails: MdServiceService) {
    this.showCompnayDetails = companyDetails.companyDetails[0];
    console.log("FooterComponent companyDetails.companyDetails " + companyDetails.companyDetails);
  }

}

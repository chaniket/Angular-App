import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Base64ImagPipePipe } from 'src/app/pipes/base64-imag-pipe.pipe';
import { GreenElDirective } from '../directives/green-el.directive';
import { ReactiveDashboardComponent } from './reactive-dashboard/reactive-dashboard.component';
import { AboutComponent } from './about/about.component';
import { UserReportComponent } from './user-report/user-report.component';
import { UserReportDtlComponent } from './user-report-dtl/user-report-dtl.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ReactiveFormComponent, Base64ImagPipePipe,
    GreenElDirective, ReactiveDashboardComponent, AboutComponent,
     UserReportDtlComponent,
     AboutCompanyComponent, AboutMeComponent,
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
    ,AppRoutingModule // added App routing our main module
    ,HttpClientModule,UserReportComponent
  ],
  exports: [ReactiveFormComponent]
})
export class CustomReactiveFormsModule { }

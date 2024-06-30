import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './reactive-forms/about/about.component';
import { ReactiveDashboardComponent } from './reactive-forms/reactive-dashboard/reactive-dashboard.component';
import { ReactiveFormComponent } from './reactive-forms/reactive-form/reactive-form.component';
import { UserReportComponent } from './reactive-forms/user-report/user-report.component';
import { AddBootstrapSessionComponent } from './add-bootstrap-session/add-bootstrap-session.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './reactive-forms/about-company/about-company.component';
import { AboutMeComponent } from './reactive-forms/about/about-me/about-me.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children :[
      {path:'about-company',component:AboutCompanyComponent},
      {path:'about-me',component:AboutMeComponent}
    ]
  },
  {
    path: 'reactive-dashboard',
    component: ReactiveDashboardComponent
  },
  {
    path: '',
    component: ReactiveDashboardComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  }
  ,
  {
    path: 'user-report/:id',
    component: UserReportComponent
  },
  {
    path: 'boostrap/:id',
    component: AddBootstrapSessionComponent
  },
  {
    path: 'input-output/:item',
    component: InputOutputComponent
  },
  {
    path: '**',
    component: NoPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }

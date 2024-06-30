import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},
	{
		type: 'secondary',
		message: 'This is a secondary alert',
	},
	{
		type: 'light',
		message: 'This is a light alert',
	},
	{
		type: 'dark',
		message: 'This is a dark alert',
	},
];

@Component({
  selector: 'add-bootstrap-session',
  templateUrl: './add-bootstrap-session.component.html',
  imports:[NgbAlertModule,CommonModule],
  standalone:true,
  styleUrls: ['./add-bootstrap-session.component.css']
})
export class AddBootstrapSessionComponent {
  alerts = ALERTS;
  
  constructor() {
		this.reset();
	}

  reset(){
    console.log("resert"+JSON.stringify(ALERTS));
    this.alerts = Array.from(ALERTS);
  }

  close(alert : Alert){
    this.alerts.splice(this.alerts.indexOf(alert),1);
  }

}

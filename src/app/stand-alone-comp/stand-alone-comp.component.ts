import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stand-alone-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stand-alone-comp.component.html',
  styleUrls: ['./stand-alone-comp.component.css']
})
export class StandAloneCompComponent {

}

import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'material-ui',
  templateUrl: './material-ui.component.html',
  styleUrls: ['./material-ui.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule
,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule

  ],
})
export class MaterialUIComponent {
  clicked = false;
}

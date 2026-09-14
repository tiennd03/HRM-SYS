import { Component , input } from '@angular/core';
import { ReactiveFormsModule , FormControl } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';

import { DateField } from '../../../models/field-types/date-field.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-field',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslatePipe
  ],
  templateUrl: './date-field.component.html',
  styleUrl: './date-field.component.scss'
})
export class DateFieldComponent {
  config = input.required<DateField>();
  control = input.required<FormControl>();

  ngOnInit() {
    this.control().valueChanges.subscribe(value => {
      console.log('Date value change: ' , value);
    })
  }
}

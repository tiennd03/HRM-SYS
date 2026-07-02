import { Component , input } from '@angular/core';
import { FormControl , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslatePipe } from '@ngx-translate/core';

import { DateField } from '../../../models/field-types/date-field.model';
@Component({
  selector: 'app-date-field',
  imports: [
    CommonModule,
    ReactiveFormsModule, 
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
      console.log('Date value changed:', value);
    })
  }
}

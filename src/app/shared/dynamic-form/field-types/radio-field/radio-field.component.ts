import { Component , input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormControl } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';

import { RadioField } from '../../../models/field-types/radio-field.model';
@Component({
  selector: 'app-radio-field',
  imports: [
    CommonModule,
    TranslatePipe,
    ReactiveFormsModule
  ],
  templateUrl: './radio-field.component.html',
  styleUrl: './radio-field.component.scss'
})
export class RadioFieldComponent {
  config = input.required<RadioField>();
  control = input.required<FormControl>();

  ngOnInit() {
    this.control().valueChanges.subscribe(value => {
      console.log('Radio field value changed:', value);
    })
  }
}

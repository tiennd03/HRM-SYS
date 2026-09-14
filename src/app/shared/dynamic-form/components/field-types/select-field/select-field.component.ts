import { CommonModule } from '@angular/common';
import { Component ,input } from '@angular/core';
import { ReactiveFormsModule , FormControl } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';
import { SelectField } from '../../../models/field-types/select-field.model';



@Component({
  selector: 'app-select-field',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './select-field.component.html'
})
export class SelectFieldComponent {
  config = input.required<SelectField>();
  control = input.required<FormControl>();

  ngOnInit() {
    this.control().valueChanges.subscribe(value => {
      console.log('Select value change:', value);
    })
  }
}

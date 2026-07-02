import { Component , input } from '@angular/core';
import { FormControl , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslatePipe } from '@ngx-translate/core';

import { SelectField } from '../../../models/field-types/select-field.model';
@Component({
  selector: 'app-select-field',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss'
})
export class SelectFieldComponent {
  config = input.required<SelectField>();
  control = input.required<FormControl>();
}
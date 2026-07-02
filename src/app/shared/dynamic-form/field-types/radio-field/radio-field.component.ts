import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RadioField } from '../../../models/field-types/radio-field.model';
import { TranslatePipe } from '@ngx-translate/core';
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

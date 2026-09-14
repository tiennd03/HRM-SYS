import { Component, effect, input, output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TranslatePipe } from "@ngx-translate/core";

import { TextFieldComponent } from "./components/field-types/text-field/text-field.component";
import { CheckboxFieldComponent } from "./components/field-types/checkbox-field/checkbox-field.component";
import { PasswordFieldComponent } from "./components/field-types/password-field/password-field.component";
import { RadioFieldComponent } from "./components/field-types/radio-field/radio-field.component";
import { EmailFieldComponent } from "./components/field-types/email-field/email-field.component";
import { SelectFieldComponent } from "./components/field-types/select-field/select-field.component";
import { DateFieldComponent } from "./components/field-types/date-field/date-field.component";
import { TextareaFieldComponent } from "./components/field-types/textarea-field/textarea-field.component";
import { SearchFieldComponent } from "./components/field-types/search-field/search-field.component";
import { ButtonFieldComponent } from "./components/button-types/button-filed.component";

import { ButtonConfig } from "./models/button-types/base-button-config.model";
import { FormConfig } from "./models/formConfig.model";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
    CommonModule,

    
    TextFieldComponent,
    PasswordFieldComponent,
    CheckboxFieldComponent,
    RadioFieldComponent,
    EmailFieldComponent,
    SelectFieldComponent,
    DateFieldComponent,
    TextareaFieldComponent,
    SearchFieldComponent,
    ButtonFieldComponent
  ],
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent {
  config = input.required<FormConfig>();

  formSubmit = output<Record<string, any>>();
  initialValue = input<Record<string, any>>({}); 
  
  searchChange = output<string>();
  searchClick = output<void>();

  buttonClick = output<ButtonConfig>();

  form = new FormGroup({});
  formClass = input<string>('');
  formButtonClass = input<string>('');
  formFieldClass = input<string>('');
  constructor() {
    effect(() => {
      const values = this.initialValue();   
      const fields = this.config().fields;
      fields.forEach(field => {
        this.form.addControl(
          field.name,
          new FormControl(values[field.name] ?? '', field.validators ?? [])
        );
      });
    });
  }
  onSubmit() {
    if (this.form.invalid) return;
    this.formSubmit.emit(this.form.value);
  }
  onButtonClick(button: ButtonConfig) {
    button.action?.();
    this.buttonClick.emit(button);
  }
  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }
}

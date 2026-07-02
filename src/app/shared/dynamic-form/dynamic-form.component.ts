import { Component, effect, input, output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TranslatePipe } from '@ngx-translate/core';
import { TextFieldComponent } from "./field-types/text-field/text-field.component";
import { PasswordFieldComponent } from "./field-types/password-field/password-field.component";
import { CheckboxFieldComponent} from "./field-types/checkbox-field/checkbox-field.component";
import { TextareaFieldComponent } from "./field-types/textarea-field/textarea-field.component";
import { FieldConfig } from "../models/field-config.model";
@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ ReactiveFormsModule,
            TextFieldComponent,
            PasswordFieldComponent,
            CheckboxFieldComponent,
            TextareaFieldComponent,
            TranslatePipe],
  templateUrl:'./dynamic-form.component.html'
})
export class DynamicFormComponent {
fields = input.required<FieldConfig[]>();
formSubmit = output<Record<string, any>>();
form = new FormGroup({});
submitLabel = input<string>('');
buttonClass = input<string>('');
constructor() {
  effect(() => {
    this.fields().forEach(field => {
      this.form.addControl(
        field.name,
        new FormControl('', field.validators ?? [])
      );
    });
  });
}
onSubmit() {
  if (this.form.invalid) return;
  this.formSubmit.emit(this.form.value);
}
getControl(name: string): FormControl {
  return this.form.get(name) as FormControl;
}
}

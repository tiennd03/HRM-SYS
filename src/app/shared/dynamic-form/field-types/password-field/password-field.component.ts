import { Component, input } from "@angular/core";
import { PasswordField } from "../../../models/field-types/password-field.model";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslatePipe } from'@ngx-translate/core';

@Component({
    selector: 'app-password-field',
    standalone : true,
    imports : [ReactiveFormsModule,TranslatePipe],
    templateUrl :'./password-field.component.html',
})

export class PasswordFieldComponent {
  config = input.required<PasswordField> ();
  control = input.required <FormControl> ();
}
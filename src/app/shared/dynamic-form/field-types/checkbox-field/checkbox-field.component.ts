import { Component, input } from "@angular/core";
import { CheckboxField } from "../../../models/field-types/checkbox-field.model";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslatePipe } from'@ngx-translate/core';

@Component ({
    selector: 'app-checkbox-field',
    standalone : true,
    imports : [ ReactiveFormsModule, TranslatePipe ],
    templateUrl :'./checkbox-field.component.html',
})
export class CheckboxFieldComponent {
  config = input.required<CheckboxField> ();
  control = input.required <FormControl> ();
  
}
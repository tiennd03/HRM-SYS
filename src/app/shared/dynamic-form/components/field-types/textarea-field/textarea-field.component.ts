import { Component, input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslatePipe } from '@ngx-translate/core';
import { TextareaField } from "../../../models/field-types/textarea-field.model";
@Component({
    selector: 'app-textarea-field',
    standalone : true,
    imports : [ReactiveFormsModule, TranslatePipe],
    templateUrl :'./textarea-field.component.html',
})
export class TextareaFieldComponent {
  config = input.required<TextareaField> ();
  control = input.required <FormControl> ();
}
import { Component, input, HostBinding, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslatePipe } from '@ngx-translate/core';
import { TextField } from "../../../models/field-types/text-fiels.model";
@Component({
    selector: 'app-text-field',
    standalone : true,
    imports : [ReactiveFormsModule, TranslatePipe],
    templateUrl :'./text-field.component.html',
})

export class TextFieldComponent {
  config = input.required<TextField> ();
  control = input.required <FormControl> ();
  @HostBinding('class') hostClass = 'mb-4 block';
  @Input('class') set classInput(val: string | undefined) {
    this.hostClass = `${val ?? ''} mb-4 block`.trim();
  }
}
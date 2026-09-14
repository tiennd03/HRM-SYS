import { Component, input} from "@angular/core";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslatePipe } from '@ngx-translate/core';
import { EmailField } from "../../../models/field-types/email-field.model";

@Component({
    selector: 'app-email-field',
    standalone : true,
    imports : [ ReactiveFormsModule,TranslatePipe ],
    templateUrl :'./email-field.component.html',
})
export class EmailFieldComponent {
  config = input.required<EmailField> ();
  control = input.required <FormControl> ();
}
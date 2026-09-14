import { Component , input , output} from '@angular/core';
import { ReactiveFormsModule , FormControl } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonConfig } from '../../models/button-types/base-button-config.model';


@Component ({
    selector: 'app-button-field',
    standalone : true,
    imports : [ReactiveFormsModule,TranslatePipe],
    templateUrl :'./button-field.component.html',
})
export class ButtonFieldComponent {
    config = input.required<ButtonConfig> ();
    
    
    clicked = output<void>();
    onClick() {
        this.clicked.emit();
    }
}
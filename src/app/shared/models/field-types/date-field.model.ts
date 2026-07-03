import { BaseFieldConfig } from './../base-field-config.model';


export interface DateField extends BaseFieldConfig {
    type: 'date';

    minDate?: Date;
    maxDate?: Date;
}
import { BaseFieldConfig } from './../base-field-config.model';


export interface DateField extends BaseFieldConfig {
    type: 'date';

    minDate?: string;
    maxDate?: string;
}
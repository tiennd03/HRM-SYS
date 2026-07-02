import { BaseFieldConfig, DynamicFieldOption } from './../base-field-config.model';

export interface SelectField extends BaseFieldConfig {
    type: 'select';
    
    options: DynamicFieldOption[];
}
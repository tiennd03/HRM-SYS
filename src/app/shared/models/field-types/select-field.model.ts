import { BaseFieldConfig, DynamicFieldOption } from './../base-field-config.model';

const enum UserRole {
    Admin = 'admin',
    User = 'user',
    Guest = 'guest'
}
export interface SelectField extends BaseFieldConfig {
    type: 'select';
    
    options: DynamicFieldOption<UserRole>[] | DynamicFieldOption[];
}
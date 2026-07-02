import { BaseFieldConfig } from './../base-field-config.model';
export interface SearchField extends BaseFieldConfig {
    type: 'search';

    clearable?: boolean;
}
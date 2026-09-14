import { FieldConfig } from './field-types/field-config.model';
import { ButtonConfig } from './button-types/base-button-config.model';

export interface FormConfig {
    fields : FieldConfig[];
    buttons ?: ButtonConfig[];
}
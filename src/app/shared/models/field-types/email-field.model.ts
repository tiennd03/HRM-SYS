import { BaseFieldConfig } from "../base-field-config.model";
export interface EmailField extends BaseFieldConfig {
    type: 'email';
    pattern ?: RegExp;
}
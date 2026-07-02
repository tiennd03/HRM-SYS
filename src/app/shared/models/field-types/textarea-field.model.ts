import { BaseFieldConfig } from "../base-field-config.model";
export interface TextareaField extends BaseFieldConfig {
    type: 'textarea';
    rows ?: number;
    cols ?: number;
}
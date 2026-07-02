import { BaseFieldConfig, DynamicFieldOption } from "../base-field-config.model";

export interface RadioField extends BaseFieldConfig {
  type: 'radio';
  options: DynamicFieldOption[];
  
}
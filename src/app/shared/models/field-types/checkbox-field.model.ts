import { BaseFieldConfig, DynamicFieldOption } from '../base-field-config.model';

export interface CheckboxField extends BaseFieldConfig {
  type: 'checkbox'
  checked?: boolean;
  options?: DynamicFieldOption[];
}
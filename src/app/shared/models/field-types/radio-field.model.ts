import { BaseFieldConfig, DynamicFieldOption } from "../base-field-config.model";

const enum ActiveChecked {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

export interface RadioField extends BaseFieldConfig {
    type : 'radio';
    options : DynamicFieldOption<ActiveChecked>[] | DynamicFieldOption[];
}
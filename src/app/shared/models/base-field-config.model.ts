import { ValidatorFn } from '@angular/forms';
export interface DynamicFieldOption<T = any> {
    label : string;
    value : T;
}
export interface  BaseFieldConfig{
    name : string;
    label : string;
    placeholder ?: string;
    options ?: DynamicFieldOption[];
    validators ?: ValidatorFn[];
    errorMessage ?: {
        required ?: string;
        minLength ?: string;
        pattern ?: string;
    }
    className?: {
        container?: string;
        label?: string;
        input?: string;
        option?: string;
        button?: string;
        span?: string;
    };
    readonly?: boolean; 
}

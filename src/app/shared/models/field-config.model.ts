import { PasswordField } from "./field-types/password-field.model";
import { CheckboxField } from "./field-types/checkbox-field.model";
import { RadioField } from "./field-types/radio-field.model";
import { SearchField } from "./field-types/search-field.model";
import { DateField } from "./field-types/date-field.model"
import { SelectField } from "./field-types/select-field.model";
export type FieldConfig =  PasswordField | CheckboxField
    | RadioField | SearchField | DateField | SelectField ; 
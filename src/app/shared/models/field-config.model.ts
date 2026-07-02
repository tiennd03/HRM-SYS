import { TextField } from "./field-types/text-fiels.model";
import { PasswordField } from "./field-types/password-field.model";
import { CheckboxField } from "./field-types/checkbox-field.model";
import { TextareaField } from "./field-types/textarea-field.model";
export type FieldConfig = TextField | PasswordField | CheckboxField | TextareaField;
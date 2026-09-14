import { TextField } from "./text-fiels.model";
import { PasswordField } from "./password-field.model";
import { CheckboxField } from "./checkbox-field.model";
import { RadioField } from "./radio-field.model";
import { TextareaField } from "./textarea-field.model";
import { EmailField } from "./email-field.model";
import { SelectField } from "./select-field.model";
import { DateField } from "./date-field.model";
import { SearchField } from "./search-field.model";
export type FieldConfig = TextField | PasswordField | CheckboxField
          | TextareaField | EmailField | RadioField
          | SelectField | DateField | SearchField;

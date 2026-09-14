import { Component , inject , signal} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Validators } from '@angular/forms';

import { TextField } from '../../../../shared/dynamic-form/models/field-types/text-fiels.model';
import { DateField } from '../../../../shared/dynamic-form/models/field-types/date-field.model';
import { SelectField } from './../../../../shared/dynamic-form/models/field-types/select-field.model';
import { DynamicFormComponent } from '../../../../shared/dynamic-form/dynamic-form.component';
import { EmailField } from './../../../../shared/dynamic-form/models/field-types/email-field.model';
import { FormConfig } from '../../../../shared/dynamic-form/models/formConfig.model';

import { VALIDATION_PATTERN } from '../../constants/validation-pattern.constant';
export type dynamicform = TextField | DateField | SelectField | EmailField ;
@Component({
  selector: 'app-employee-create',
  imports: [
    DynamicFormComponent,
    TranslatePipe
  ],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss'
})
export class EmployeeCreateComponent {
  formClass = "p-4 rounded border border-gray-200 bg-white";
  fields : dynamicform[] = [
    {
      type: 'text',
      name: 'Mã nhân viên',
      label: 'EMP.CREATE.ID',
      placeholder: 'EMP__',
      required: true,
      validators: [
        Validators.required, 
        Validators.pattern(VALIDATION_PATTERN.EMP_ID)
      ],
      errorMessage: {
        required : 'EMP.ERROR_MESSAGE.ID_REQUIRED',
        pattern : 'EMP.ERROR_MESSAGE.ID_PATTERN',
        minLength : 'EMP.ERROR_MESSAGE.ID_MIN'
      },
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'text',
      name: 'Họ và tên',
      label: 'EMP.CREATE.FULL_NAME',
      placeholder: 'Nguyễn Văn A',
      required: true,
      validators: [
        Validators.required,
        Validators.pattern(VALIDATION_PATTERN.FULL_NAME)
      ],
      errorMessage: {
        required : 'EMP.ERROR_MESSAGE.FULL_NAME_REQUIRED',
        pattern : 'EMP.ERROR_MESSAGE.FULL_NAME_PATTERN'
      },
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Giới tính',
      label: 'EMP.CREATE.GENDER',
      required: true,
      options: [
        { label: 'Nam', value: 'male' },
        { label: 'Nữ', value: 'female' },
      ],
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'date',
      name: 'Ngày sinh',
      label: 'EMP.CREATE.DATE_OF_BIRTH',
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      placeholder: 'yyyy-mm-dd',
      required: true,
      className: {
        span: 'col-span-6',
        label: 'block text-sm font-semibold text-gray-700'
      }
    },
    {
      type: 'email',
      name: 'Email',
      label: 'EMP.CREATE.EMAIL',
      placeholder: 'name@company.vn',
      required: true,
      validators: [
        Validators.required,
        Validators.pattern(VALIDATION_PATTERN.EMAIL)
      ],
      errorMessage: {
        required : 'EMP.ERROR_MESSAGE.EMAIL_REQUIRED',
        pattern : 'EMP.ERROR_MESSAGE.EMAIL_PATTERN'
      },
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'tel',
      name: 'Số điện thoại',
      label: 'EMP.CREATE.PHONE',
      placeholder: '0123456789',
      required: true,
      validators: [
        Validators.required,
        Validators.pattern(VALIDATION_PATTERN.TEL)
      ],
      errorMessage: {
        required : 'EMP.ERROR_MESSAGE.PHONE_REQUIRED',
        pattern : 'EMP.ERROR_MESSAGE.PHONE_PATTERN'
      },
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Phòng ban',
      label: 'EMP.CREATE.DEPARTMENT',
      required: true,
      options: [
        { label: 'Kinh doanh', value: 'sales' },
        { label: 'Kỹ thuật', value: 'engineering' },
        { label: 'Hành chính', value: 'hr' },
      ],
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Chức vụ',
      label: 'EMP.CREATE.POSITION',
      required: true,
      options: [
        { label: 'Nhân viên', value: 'employee' },
        { label: 'Quản lý', value: 'manager' },
        { label: 'Giám đốc', value: 'director' },
      ],
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'date',
      name: 'Ngày vào làm',
      label: 'EMP.CREATE.JOIN_DATE',
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      placeholder: 'yyyy-mm-dd',
      required: true,
      className: {
        span: 'col-span-6',
        label: 'block text-sm font-semibold text-gray-700'
      }
    },
    {
      type: 'number',
      name: 'Lương',
      label: 'EMP.CREATE.SALARY',
      placeholder: 'VND',
      required: true,
      validators: [
        Validators.required,
        Validators.pattern(VALIDATION_PATTERN.SALARY)
      ],
      errorMessage: {
        required : 'EMP.ERROR_MESSAGE.SALARY_REQUIRED',
        pattern : 'EMP.ERROR_MESSAGE.SALARY_PATTERN'
      },
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Trạng thái',
      label: 'EMP.CREATE.STATUS',
      placeholder: 'ACTIVE / PROBATION / INACTIVE / TERMINATED  ▾',
      required: true,
      options: [
        { label: 'Hoạt động', value: 'active' },
        { label: 'Ngừng hoạt động', value: 'inactive' },
      ],
      className: {
        span: 'col-span-6'
      }
    }
  ]

  formConfig: FormConfig = {
    fields: this.fields,
    buttons: [
      {
        label: 'LOGIN.SUBMIT',
        type: 'submit',
        className: 'button-login'
      }
    ]
  };

}

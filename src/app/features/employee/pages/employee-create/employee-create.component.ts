import { Component , effect, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Validators } from '@angular/forms';

import { TextField } from '../../../../shared/dynamic-form/models/field-types/text-fiels.model';
import { DateField } from '../../../../shared/dynamic-form/models/field-types/date-field.model';
import { SelectField } from './../../../../shared/dynamic-form/models/field-types/select-field.model';
import { DynamicFormComponent } from '../../../../shared/dynamic-form/dynamic-form.component';
import { EmailField } from './../../../../shared/dynamic-form/models/field-types/email-field.model';
import { FormConfig } from '../../../../shared/dynamic-form/models/formConfig.model';

import { VALIDATION_PATTERN } from '../../constants/validation-pattern.constant';
import { Employee } from '../../models/employee.model';
import { DepartmentService } from '../../../departments/service/department.service';
import { PositionService } from '../../../position/service/position.service'
import { DynamicFieldOption } from '../../../../shared/dynamic-form/models/field-types/base-field-config.model';
export type dynamicform = TextField | DateField | SelectField | EmailField ;
@Component({
  selector: 'app-employee-create',
  imports: [
    DynamicFormComponent,
    TranslatePipe
  ],
  templateUrl: './employee-create.component.html'

})
export class EmployeeCreateComponent {
  private departmentService = inject(DepartmentService);
  private positionService = inject(PositionService);


  formClass = "p-4 rounded border border-gray-200 bg-white";
  fields : dynamicform[] = [
    {
      type: 'text',
      name: 'employeeCode',
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
      name: 'fullName',
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
      name: 'gender',
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
      name: 'dateOfBirth',
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
      name: 'email',
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
      name: 'phone',
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
      name: 'department',
      label: 'EMP.CREATE.DEPARTMENT',
      required: true,
      options: [],
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'position',
      label: 'EMP.CREATE.POSITION',
      required: true,
      options: [],
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'date',
      name: 'joinDate',
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
      name: 'salary',
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
      name: 'status',
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
        label: 'EMP.BTN.SAVE_BTN',
        type: 'submit',
        className: {
          button: 'btn bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 px-8',
          container : ''
        }
      },
      {
        label: 'EMP.BTN.CANCEL_BTN',
        type: 'button',
        className: {
          button: 'btn px-8'
        }
      }
    ]
  };
  private updateFieldOptions(
  fieldName: string,
  options: DynamicFieldOption[]
  ): void {
    this.fields = this.fields.map(field =>
      field.name === fieldName && field.type === 'select'
        ? {
            ...field,
            options
          }
        : field
    );

    this.formConfig = {
      ...this.formConfig,
      fields: this.fields
    };
  }
  constructor() {
    effect(() => {
      const departments = this.departmentService.departments();
      this.updateFieldOptions(
        'department',
        departments.map(department => ({
          label: department.name,
          value: department.id
        }))
      );
      const positions = this.positionService.positions();
      this.updateFieldOptions(
        'position',
        positions.map( position => ({
          label: position.name,
          value: position.id
        }))
      )
    }); 
  }
  ngOnInit(): void {
    this.departmentService.search({ page: 0, size: 1000 });
    this.positionService.searchListPosition({ page: 0, size: 1000 });
  }

  onSubmit(value : Record<string, any>): void {
    const payload: Omit<Employee, 'id'> = {
      employeeCode: value['employeeCode'],
      fullName: value['fullName'],
      gender: value['gender'],
      dateOfBirth: value['dateOfBirth'],
      email: value['email'],
      phone: value['phone'],
      departmentId: value['departmentId'],
      positionId: value['position'],
      joinDate: value['joinDate'],
      salary: value['salary'],
      status: value['status']
    }
  }

}

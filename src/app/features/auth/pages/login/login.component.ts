import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { AuthService } from "../../../../core/services/auth.service";
import { DynamicFormComponent } from "../../../../shared/dynamic-form/dynamic-form.component";
import { TextField } from "../../../../shared/dynamic-form/models/field-types/text-fiels.model";
import { PasswordField } from "../../../../shared/dynamic-form/models/field-types/password-field.model";
import { CheckboxField } from "../../../../shared/dynamic-form/models/field-types/checkbox-field.model";
import { SearchBarComponent } from "../../../../shared/components/search-bar/search-bar.component";
import { FormConfig } from "../../../../shared/dynamic-form/models/formConfig.model";

export type LoginFormFields = TextField | PasswordField | CheckboxField;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,TranslatePipe, DynamicFormComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private translate = inject(TranslateService);
 
  formLoginConfig: FormConfig = {
    fields: [
        {
          name: 'username',
          type: 'text',
          label: 'LOGIN.USERNAME_LABEL',
          placeholder: 'LOGIN.USERNAME_PLACEHOLDER',
          className: {
          span: 'col-span-12'
          },
          validators: [Validators.required],
          errorMessage: {
            required:'LOGIN.VALIDATION.USERNAME_REQUIRED' 
          }
        },
        {
          name: 'password',
          type: 'password',
          label: 'LOGIN.PASSWORD_LABEL',
          placeholder: 'LOGIN.PASSWORD_PLACEHOLDER',
          className: {
          span: 'col-span-12'
          },
          validators: [Validators.required, Validators.minLength(6)],
          errorMessage: {
            required: 'LOGIN.VALIDATION.PASSWORD_REQUIRED',
            minLength: 'LOGIN.VALIDATION.PASSWORD_MIN'
          }
        },
        {
          name: 'rememberMe',
          type: 'checkbox',
          label: 'LOGIN.REMEMBER_ME',
          checked: false,
          className: {
            span: 'col-span-6',
            container: 'custom-checkbox-gray',
          },
          options: [
            {
              label: 'LOGIN.REMEMBER_ME',
              value: false
            }
          ]
        }
      ],
    buttons: [
      {
        label: 'LOGIN.SUBMIT',
        type: 'submit',
        className: 'w-full flex-1 h-11 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      },
      {
        label: 'giang',
        type: 'button',
        className: 'w-full flex-1 h-11 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      }
    ]
  }
  
  isLoading = false;
  errorMsg = '';

  onLogin(data: Record<string, any>) {
    this.errorMsg = '';
    this.isLoading = true;
    this.authService.login({
      username: data['username'].trim(),
      password: data['password'], 
    }).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/layout';
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 401) {
          this.errorMsg = this.translate.instant('LOGIN.ERROR.INVALID_CREDENTIALS');
        }
      },
    });
  }
}

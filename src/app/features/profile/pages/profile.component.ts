import { Component,computed,effect,inject, signal,} from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { TranslatePipe } from "@ngx-translate/core";
import { DatePipe } from "@angular/common";
import { Validators } from "@angular/forms";
import { DynamicFormComponent } from "../../../shared/dynamic-form/dynamic-form.component";
import { ProfileService } from "../service/profile.service";

import { FormConfig } from "../../../shared/dynamic-form/models/formConfig.model";
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [TranslatePipe,DynamicFormComponent,DatePipe],
  templateUrl: './profile.component.html',
})
export class ProfilePageComponent {
    private authService = inject(AuthService);
    private profileService = inject(ProfileService);

    user = this.authService.currentUser;

    initials = computed(() => {
        const fullName = this.user()?.employee?.fullName ?? '';
         if (!fullName) {
            return '';
         }
        const parts = fullName.trim().split(' ')
        const first = parts[0]?.[0] ?? '';
        const last = parts[parts.length - 1]?.[0] ?? '';
        return (first + last).toUpperCase();
    });

    departmentName = signal<string | null>(null);
    positionName = signal<string | null>(null);
    constructor (){
      effect(() => {
      const emp = this.user()?.employee;
      if (!emp) return;
        this.profileService
        .getDepartmentAndPosition(emp.departmentId, emp.positionId)
        .subscribe(({ department, position }) => {
          this.departmentName.set(department.name);
          this.positionName.set(position.name);
        })
      });
    }

    changePasswordConfig: FormConfig = {
      fields: [
        {
          name: 'currentPassword',
          type: 'password',
          label: 'PROFILE.CHANGE_PASSWORD.CURRENT_LABEL',
          placeholder: 'PROFILE.CHANGE_PASSWORD.CURRENT_PLACEHOLDER',
          className: { span: 'col-span-6' },
          validators: [Validators.required],
          errorMessage: {
            required: 'PROFILE.CHANGE_PASSWORD.VALIDATION.CURRENT_REQUIRED',
          },
        },
        {
          name: 'newPassword',
          type: 'password',
          label: 'PROFILE.CHANGE_PASSWORD.NEW_LABEL',
          placeholder: 'PROFILE.CHANGE_PASSWORD.NEW_PLACEHOLDER',
          className: { span: 'col-span-6' },
          validators: [Validators.required, Validators.minLength(6)],
          errorMessage: {
            required: 'PROFILE.CHANGE_PASSWORD.VALIDATION.NEW_REQUIRED',
            minLength: 'PROFILE.CHANGE_PASSWORD.VALIDATION.NEW_MIN',
          },
        }
      ],
      buttons: [
        {
          label: 'PROFILE.CHANGE_PASSWORD.SUBMIT',
          type: 'submit',
          className: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        }
      ]
    }  
    onChangePassword(data: Record<string, any>) {
      console.log(data);
    }
}

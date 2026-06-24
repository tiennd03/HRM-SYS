import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { AuthService } from "../../../../core/services/auth.service";
import { SearchBarComponent } from "../../../../shared/components/search-bar/search-bar.component";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,TranslatePipe, SearchBarComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private translate = inject(TranslateService);

 
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  isLoading = false;
  errorMsg = '';

  get username() { return this.form.get('username')!; }
  get password() { return this.form.get('password')!; }

  onLogin() {
    this.errorMsg = '';
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.isLoading = true;

    this.authService.login({
      username: this.username.value!.trim(),
      password: this.password.value!,
    }).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/dashboard';
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
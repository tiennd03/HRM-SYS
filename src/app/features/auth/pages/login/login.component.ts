import { Component,inject,signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Route , ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../../../core/services/auth.service";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent{
    private authService = inject(AuthService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    username = signal('');
    password = signal('');

    isLoading = signal(false);
    errorMsg = signal('');

    private validate ():string{

      if (!this.username().trim()) {
        return 'Vui lòng nhập tên đăng nhập';
      }
      if (!this.password().trim()){
        return 'Vui lòng nhập mật khẩu ';
      }
      if (this.password().length < 6){
        return 'Mật khẩu phải có ít nhất 6 ký tự';
      }

    return '';

    }

    onLogin() {
        this.errorMsg.set('');

        const validationError = this.validate();
        if (validationError) {
         this.errorMsg.set(validationError);
         return;
        }

        this.isLoading.set(true);

        this.authService.login({
         username: this.username().trim(),
         password: this.password(),
        }).subscribe({
         next: () => {
          this.isLoading.set(false);
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/dashboard';
          this.router.navigateByUrl(returnUrl);
         },
         error: (err) => {
          this.isLoading.set(false);

          if (err.status === 401) {
            this.errorMsg.set('Sai tài khoản hoặc mật khẩu');
          }
         },
        });
    }


}
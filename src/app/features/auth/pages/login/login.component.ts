import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = signal('');
  password = signal('');
  isLoading = signal(false);
  errorMsg = signal('');
  showPassword = signal(false);

  onLogin() {}

  toggleShowPassword() {
    this.showPassword.update(v => !v);
  }
}
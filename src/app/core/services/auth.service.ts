import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { AuthUser, LoginRequest, LoginResponse } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private _currentUser = signal<AuthUser | null>(this.loadUserFromStorage());

  currentUser  = this._currentUser.asReadonly();
  isLoggedIn   = computed(() => this._currentUser() !== null);
  permissions  = computed(() => this._currentUser()?.permissions ?? []);

  login(request: LoginRequest) {
    return this.http.post<LoginResponse>('/api/v1/auth/login', request).pipe(
      tap(response => {
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('current_user', JSON.stringify(response.user));
        this._currentUser.set(response.user);
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
    this._currentUser.set(null);
  }

  getProfile() {
    return this.http.get<AuthUser>('/api/v1/auth/profile').pipe(
      tap(user => {
        this._currentUser.set(user);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  hasPermission(permission: string): boolean {
    return this.permissions().includes(permission);
  }

  private loadUserFromStorage(): AuthUser | null {
    const raw = localStorage.getItem('current_user');
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AuthUser;
    } catch {
      return null;
    }
  }
}
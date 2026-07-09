import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  removeToken() {
    localStorage.removeItem('accessToken');
  }

  clear() {
    localStorage.clear();
  }
}
import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService)
  const skipAuths = [
    '/auth/login',
    '/auth/logout'
  ];
  const isSkipAuth = skipAuths.some((url) => req.url.includes(url));
  if (isSkipAuth) {
    return next(req);
  }
  const accessToken = tokenService.getToken();
  if (accessToken) {
      const tokenizedReq = req.clone({
        setHeaders: {
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      })
      return next(tokenizedReq);
  }

  return next(req);
};

import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { TokenService } from '../services/token.service';

export const globalHttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastrService)
  const translate = inject(TranslateService)
  const tokenService = inject(TokenService)
  return next(req).pipe(
    catchError((e:HttpErrorResponse) => {
      switch (e.status){
        case 401:
          toast.error(translate.instant('ERROR.401'));
          tokenService.removeToken();
          window.location.href = '/login';
          break;
        case 403: 
          toast.warning(translate.instant('ERROR.403'));
          break;
        default:
          toast.error(translate.instant('ERROR.DEFAULT'));
          break;
      }
      return throwError(() => e);
    })
  );
};

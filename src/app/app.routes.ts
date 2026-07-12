import { Routes } from '@angular/router';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { EmployeeListComponent } from './features/employee/pages/employee-list/employee-list.component';
export const routes: Routes = [
  { path: '', redirectTo: 'app-employee-list', pathMatch: 'full'},
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(m => m.LoginComponent),
  },
  { path: 'app-employee-list', component: EmployeeListComponent},
  { path: 'app-confirm-dialog', component: ConfirmDialogComponent},
  { path: '**', redirectTo: 'login' },
];
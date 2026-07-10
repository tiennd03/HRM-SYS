import { Routes } from '@angular/router';

import { DataTableDemoComponent } from './features/pages/data-table-demo/data-table-demo.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { EmployeeListComponent } from './features/employee/pages/employee-list/employee-list.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
export const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'app-employee-list', component: EmployeeListComponent},
  { path: 'data-table-demo', component: DataTableDemoComponent},
  { path: 'app-confirm-dialog', component: ConfirmDialogComponent},
  { path: '**', redirectTo: 'login' },
];
import { Routes } from '@angular/router';
import { DataTableDemoComponent } from './features/pages/data-table-demo/data-table-demo.component';

export const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'data-table-demo', pathMatch: 'full'},
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(m => m.LoginComponent),
  },
  { path: 'data-table-demo', component: DataTableDemoComponent},
  { path: '**', redirectTo: 'login' },
];
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { DataTableDemoComponent } from './features/pages/data-table-demo/data-table-demo.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(m => m.LoginComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component')
        .then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DataTableDemoComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
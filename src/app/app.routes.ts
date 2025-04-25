import { Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
  {
    path: 'navigation',
    component: NavigationComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      //Add more paths for navigation tabs
      {
        path: '',
        redirectTo: '/example/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/example/home',
    pathMatch: 'full',
  },
];
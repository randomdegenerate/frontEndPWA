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
      {
        path: 'weather',
        loadComponent: () => import('./weather-query/weather-query.page').then((m) => m.WeatherQueryPage),
      },
      {
        path: '',
        redirectTo: '/navigation/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/navigation/home',
    pathMatch: 'full',
  }
];
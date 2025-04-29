import { NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';
import { WeatherQueryPage } from './weather-query/weather-query.page';
import { Routes } from '@angular/router';

export const routes : Routes = [
    {path : '', redirectTo : '/home', pathMatch: 'full' },
    {path: 'home' ,component : HomePage},
    {path: 'query' ,component: WeatherQueryPage}
]
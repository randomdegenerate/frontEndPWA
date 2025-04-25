import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import dotenv from 'dotenv';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private httpClient : HttpClient) {}

  GetWeatherWeek(location: String):Observable<any>{
    dotenv.config();
    const apiKey = process.env['API_KEY'];

    return this.httpClient.get('https://api.weatherapi.com/v1/forecast.json/?key=' + apiKey + "&q=" + location + "&days=7&aqi=no&alerts=no");
  }

  /*GetWeatherCurrent(location: String): Observable<any>{
    dotenv.config();
    const apiKey = process.env['API_KEY'];
    return this.httpClient.get('https://api.weatherapi.com/v1/current.json/?key=' + apiKey + "&q=" + location + "aqi=no");
  }

  GetWeatherFuture(location: String, date: String):Observable<any>{
    
    dotenv.config();
    const apiKey = process.env['API_KEY'];
    return this.httpClient.get('https://api.weatherapi.com/v1/future.json/?key=' + apiKey + "&q=" + location + "&dt=" + date);
  };
  */
}


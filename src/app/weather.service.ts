import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private httpClient : HttpClient) {}

  GetWeatherWeek(location: String):Observable<any>{
    return this.httpClient.get("https://api.weatherapi.com/v1/forecast.json?key=add1424e4ab140c190e75227252504&q=" + location +"&days=7&aqi=no&alerts=n");
  }

  GetWeatherCurrent(location: String): Observable<any>{
    return this.httpClient.get("https://api.weatherapi.com/v1/forecast.json?key=add1424e4ab140c190e75227252504&q=" + "&q=" + location + "aqi=no");
  }

  GetWeatherFuture(location: String, date: String):Observable<any>{
    return this.httpClient.get("https://api.weatherapi.com/v1/forecast.json?key=add1424e4ab140c190e75227252504&q=" + "&q=" + location + "&dt=" + date);
  };

}


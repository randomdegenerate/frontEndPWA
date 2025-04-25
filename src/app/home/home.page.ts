import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonGrid,IonRow,IonCol, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonTitle, IonContent,IonGrid,IonRow, IonCol]
})
export class HomePage implements OnInit{
  weatherData:any = [];
  strand : string = "";
  constructor(private weatherService : WeatherService) {}

  
  ngOnInit(){
      this.weatherService.GetWeatherWeek("Galway").subscribe(
        (data)=>{
          this.weatherData = data.forecast;
        }
      )
      this.strand = this.weatherData.forecastDay[0].day[4];

  }
}

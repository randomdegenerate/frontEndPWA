import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { IonList,IonItem,IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cloud,water } from 'ionicons/icons';
@Component({
  selector: 'display-hour',
  templateUrl: './hour-display.component.html',
  styleUrls: ['./hour-display.component.scss'],
  imports: [IonList,IonItem,CommonModule, IonIcon]
})
export class HourDisplayComponent  implements OnInit {
  dayData: Array<any> = [];
  constructor(private weatherService : WeatherService) {}

  ngOnInit() {
    console.log("(hour-display component): ngOnInit");
    this.weatherService.GetWeatherForecast("galway", 1).subscribe(
      (data)=>{
        console.info(data);
        this.dayData = data.forecast.forecastday[0].hour;
        console.info(this.dayData)
      });

      addIcons({cloud,water});
  }
}

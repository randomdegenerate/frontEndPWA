import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { IonList,IonItem, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { water } from 'ionicons/icons';
@Component({
  selector: 'display-week',
  templateUrl: './week-display.component.html',
  styleUrls: ['./week-display.component.scss'],
  imports : [IonItem, IonList, CommonModule,IonIcon]
})
export class WeekDisplayComponent  implements OnInit {
  weekData: Array<any> = [];
  imgData: Array<string> = [];
  img = document.getElementById("conditon");
  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    console.log("(week-display component): ngOnInit");
    this.weatherService.GetWeatherForecast("galway", 7).subscribe(
      (data)=>{
        console.info(data);
        this.weekData = data.forecast.forecastday;
        console.info(this.weekData);
        for(let day of this.weekData){
         this.imgData.push(day.day.icon);
        }
      });
      addIcons({water});
  }

}

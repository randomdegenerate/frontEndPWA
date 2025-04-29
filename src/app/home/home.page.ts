import { KeyboardEvents } from './../../../node_modules/swiper/types/modules/keyboard.d';
import { cloud,rainy,sunny,cloudy,partlySunny } from 'ionicons/icons';
import { RouterModule} from '@angular/router';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonGrid,IonRow,IonCol, IonTitle, IonContent,IonIcon,IonButton, IonToolbar,IonList,IonItem, IonicSlides} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent,IonGrid,IonRow, IonCol,IonIcon,IonButton,RouterModule,IonToolbar,IonTitle,IonList,IonItem]
})

export class HomePage implements OnInit{
  weekData: any;
  constructor(private weatherService : WeatherService){}
  ngOnInit(){
    this.weatherService.GetWeatherWeek("galway").subscribe(
      (data)=>{
        console.info(data);
        this.weekData = data;
      }
    );
    console.info("value:" + this.weekData);
    addIcons({cloud,rainy,sunny,cloudy,partlySunny});
    //this.formatWeekForecast();
  }

  formatWeekForecast(): void{
    for(let i = 0;i < 7;i++){
      //this.weekData[0] = this.weatherData.forecast.forecastday[i][0].date;
      //
      //this.weekData[2] = this.weatherData.forecast.forecastday[i].date;
      //this.weekData[3] = this.weatherData.forecast.forecastday[i].date;
    }
  }
}

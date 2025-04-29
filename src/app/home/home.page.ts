import { cloud, home } from 'ionicons/icons';
import { RouterModule} from '@angular/router';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonGrid,IonRow,IonCol, IonTitle, IonContent,IonIcon,IonButton, IonToolbar} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent,IonGrid,IonRow, IonCol,IonIcon,IonButton,RouterModule,IonToolbar,IonTitle]
})
export class HomePage implements OnInit{
  weatherData:any = [];
  curTemp:any;
  constructor(private weatherService : WeatherService) {}

  ngOnInit(){
    addIcons({cloud})
  }
}

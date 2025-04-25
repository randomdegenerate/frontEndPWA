import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle } from '@ionic/angular/standalone';
@Component({
  selector: 'app-weather-query',
  templateUrl: './weather-query.page.html',
  styleUrls: ['./weather-query.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, CommonModule, FormsModule]
})
export class WeatherQueryPage implements OnInit{

  constructor() { }

   ngOnInit(){
     
   }
}

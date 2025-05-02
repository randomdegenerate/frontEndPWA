import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonIcon, } from '@ionic/angular/standalone';
import { home } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-weather-query',
  templateUrl: './weather-query.page.html',
  styleUrls: ['./weather-query.page.scss'],
  standalone: true,
  imports: [IonButton, 
            IonToolbar, 
            IonContent, 
            IonHeader, 
            IonTitle, 
            IonIcon,
            RouterModule
  ]
})
export class WeatherQueryPage implements OnInit{

  constructor() { }

   ngOnInit(){
    addIcons({home})
   }
}

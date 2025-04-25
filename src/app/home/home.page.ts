import { NavigationComponent } from './../navigation/navigation.component'; 
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonTitle, IonContent, NavigationComponent]
})
export class HomePage {
  constructor() {}
}

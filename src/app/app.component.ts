import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HomePage } from "./home/home.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls : ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, HomePage],
})

export class AppComponent {
  constructor() {}
}

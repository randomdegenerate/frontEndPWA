import { Component} from '@angular/core';
import {IonTabs, IonTabBar, IonTabButton, IonIcon} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { home , cloud} from 'ionicons/icons'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports : [IonTabs,IonTabBar,IonTabButton,IonIcon],
})
export class NavigationComponent{

  constructor() { 
    addIcons({home, cloud});
  }
}

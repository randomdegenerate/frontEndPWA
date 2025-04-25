import { Component, OnInit } from '@angular/core';
import { IonFooter, IonTabs, IonTab, IonTabBar, IonTabButton, IonIcon} from "@ionic/angular/standalone";

import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports : [IonTabs,IonTabBar,IonTabButton,IonIcon],
})
export class NavigationComponent  implements OnInit {

  constructor() { 
    addIcons({home});
  }
  ngOnInit() {}
}

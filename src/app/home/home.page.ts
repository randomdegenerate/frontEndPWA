import { cloud,rainy,sunny,cloudy,partlySunny } from 'ionicons/icons';
import { RouterModule} from '@angular/router';
import { WeekDisplayComponent } from '../week-display/week-display.component';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonGrid,IonRow,IonCol, IonTitle, IonContent,IonIcon,IonButton, IonToolbar,IonList,IonItem, IonInput} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { HourDisplayComponent } from '../hour-display/hour-display.component';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms'
import { Storage } from  '@ionic/storage-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, 
            IonContent,
            IonGrid,
            IonRow, 
            IonCol,
            IonIcon,
            IonButton,
            RouterModule,
            IonToolbar,
            IonTitle,
            WeekDisplayComponent,
            HourDisplayComponent,
            IonList,
            IonItem,
            IonInput,
            FormsModule,
            CommonModule,
  ]
})

export class HomePage implements OnInit{
cityData: Array<any> = new Array<any>;
cityPlaceHolderNames: string[] = ["London","New York","Bangkok","Madrid","Dublin","Berlin"];
cityNames: string[] = [];
storedCityNames: string[] = [];
  constructor(private weatherService : WeatherService, private storage: Storage){}

  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    await this.storage.create();
    for(let i = 0;i < 6;i++){

      if((await this.storage.get('storedCityNames' + i)) == null){
        await this.storage.set('storedCityNames' + i,this.cityPlaceHolderNames[i]);
      }
        this.storedCityNames[i] = await this.storage.get('storedCityNames' + i);
        this.updateCityAPI(this.storedCityNames[i],i,);
        console.log(await this.storage.get("storedCityNames" + i));
    } 
    console.log(this.storedCityNames);
    }
    
  ngOnInit(){
    console.info("(home page ngOnInit)");
    addIcons({cloud,rainy,sunny,cloudy,partlySunny});
    
    //this.formatWeekForecast();
  }

  async updateCity(index:number){
    if(this.cityNames[index].length != 0){
      console.log("updateCity");
      await this.storage.create();
      console.log(this.cityNames[index]);
      try{
      const result = await this.storage.set('storedCityNames' + index, this.cityNames[index])
      console.log('set string in storage: ' + result);
      } catch(reason){
        console.log(reason);
      }
      console.log(await this.storage.get('storedCityNames' + index));
      this.storedCityNames[index] = await this.storage.get('storedCityNames' + index);
      //refresh
     this.handleRefresh();
    }
  }

  updateCityAPI(location:string, index: number){
    console.log("updateCityAPI");
    try{
      this.weatherService.GetWeatherForecast(location,1).subscribe(
        (data)=>{
          this.cityData[index] = data;
          console.log(data);
          console.log(this.cityData[index]);
        });
    }catch(e){
      console.log(e)
    }
  }

  handleRefresh() {
    window.location.reload();
  }
}

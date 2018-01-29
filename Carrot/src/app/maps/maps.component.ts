// import { Coordinate } from './Coordinate';
import { MapService } from './../services/google/maps.service';
import { Component } from '@angular/core';
import { GPSLocation } from '../services/google/models/gpslocation.service';
import { google } from '@agm/core/services/google-maps-types';
import { DatabaseService } from '../services/database/database.service';
import { ThemesService } from '../services/themes.service';
import { RoutingListenerService } from '../services/routing-listener.service';
import { Search } from '../services/google/models/search.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent   {
  lat;
  lon;
  array;
  rKey:string;
  rewards;
  circleRadius;

  // constructor(public map: MapService , public dbs: DatabaseService , private routerListener: RoutingListenerService, private search:Search, protected mapService:MapService ) {
  // this.search.search( this.reward.ProviderName , this.map.userLocation.location , 5000 , this.map.key  );
    
  // }


  constructor(public map: MapService, protected search:Search, protected mapService:MapService,  private routerListener: RoutingListenerService, ) {
    // this.search.search('Woolworths', this.mapService.userLocation.location, 5000, this.mapService.key);
  }

  ngOnInit() { 
    // this.search.search('Woolworths', this.mapService.userLocation.location, 5000, this.mapService.key);
    this.array = this.search.array;

    console.log("cat");
    console.log(this.array)
    // for(let i = 0; i < this.array.length; i++){
    //   console.log(this.array[i].geometry.location);
    // }
    // console.log(this.array)
    this.getUserLocation();
    // this.array = 

    // console.log(this.search.getArray())
    } 

  // private getLocation(){
  //  this.array = this.search.getArray();
  // }

  get reward(){
    return this.routerListener.getReward;
  }

  radius(rad){
    this.circleRadius = rad;
  }
 
  private getUserLocation() { 
 
   if (navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition(position => { 
       this.lat = position.coords.latitude; 
       this.lon = position.coords.longitude; 
     }); 
   } 
  }
} 

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
  rKey:string;
  rewards;
  constructor(public map: MapService , public dbs: DatabaseService , private routerListener: RoutingListenerService, private search:Search ) {
  this.search.search( this.reward.ProviderName , this.map.userLocation.location , 5000 , this.map.key  );
    
  }


get reward(){
  return this.routerListener.getReward;
}

} 

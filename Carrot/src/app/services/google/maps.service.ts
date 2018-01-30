import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LocationService } from './models/location.service';
import { GPSLocation } from './models/gpslocation.service';
import { Address } from './models/address.service';
import { Search } from './models/search.service';

@Injectable()
export class MapService {
  key:string = 'AIzaSyCJurPZvQtKnlhLIfzImNtbYzUX_ZuH7rE';
  userLocation: GPSLocation;
constructor( protected httpRequest: Http, protected gps: GPSLocation  ) {   
 if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let location:LocationService = new LocationService();
        location.construct( position.coords.latitude , position.coords.longitude );
        this.currentLocation( position.coords.accuracy , location );
      });
 }
}

  currentLocation( accuracy:number , co_ordinates:LocationService) {   
     this.userLocation = this.gps;
     this.userLocation.construct(accuracy, co_ordinates);
  }

  get getCurrentLocation():GPSLocation {
    return this.userLocation;
  }
  public toString(): string {
    return 'Current Location:\n'+ this.userLocation.toString();
  }
}
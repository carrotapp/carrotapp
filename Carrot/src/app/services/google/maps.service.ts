import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'//  <= Does not want to become a return type for apiRequest method
import { LocationService } from './models/location.service';
import { GPSLocation } from './models/gpslocation.service';

@Injectable()
export class MapService {
   key:string ="AIzaSyCJurPZvQtKnlhLIfzImNtbYzUX_ZuH7rE ";
   currentLocation:GPSLocation;
   apiList:string[]=[ // Future: Change to object
     '','','','','','','','','' ];
  constructor( protected httpRequest : Http ) {
  this.locate();

}

   apiRequest(api:string,command:string){
     return this.httpRequest.get('https://maps.googleapis.com/maps/api/'+api+'/json?'+command+'&'+this.key).map(results => { results.json()});
   }
  getApi(api:number):string{
    return this.apiList[api];
  }
  locate(){
    this.userLocation().subscribe( result => {
     let co_ordinates: LocationService = new LocationService(result.location.lat, result.location.lng);
     let accuracy:number = result.accuracy;
   this.currentLocation  = new GPSLocation(accuracy, co_ordinates);
   console.log(this.currentLocation)
    });
  }
  userLocation():Observable<any>{
    return this.httpRequest.post('https://www.googleapis.com/geolocation/v1/geolocate?key='+this.key,{}).
    map( location => {
       return location.json();
      });
  }

get Currw(){
  return this.currentLocation;
}
  /*
  https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY 
  */
  public toString():string{
    return '';
 }

}

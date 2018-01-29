import { Injectable } from '@angular/core';
import { GPSLocation } from './gpslocation.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LocationService } from './location.service';

@Injectable()
export class Address {
  key:string ="AIzaSyCJurPZvQtKnlhLIfzImNtbYzUX_ZuH7rE ";
  place_id:string;
  location:LocationService;
  formatted_address:string;
  location_type:string;
  types:string[]=[];
  // possibleLocations:Address[];
/*
 * Find even you can do it in 10min a way to not having
 * to initialize an object by overriding the default constructor.
 * and create it by simple calls
*/


constructor( lat:number, lng:number, protected httpReq:Http ) {
    this.location = new LocationService( lat , lng );
    // this.initialize( this.location.longitude , this.location.latitude );
}

createObject( place_id :string , formatted_address:string , location_type:string , types:string[]):Address{
  this.place_id = place_id;
  this.formatted_address = formatted_address;
  this.location_type = location_type;
  this.types = types;
  return this;
}

createAddress(lng:number,lat:number):Observable<any>{
  return this.httpReq.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+this.key).map(result =>{
   return result.json();
  });;
}

getAddress():Address{
  return this;
}
toString():string{
    return "Place ID \t : " +this.place_id +"\nAddress \t : "+this.formatted_address+"\n";
}
//Using Origin and Address for results or something
// create_Address( origin:string,destination:string,keo:boolean):Observable<any>{
//   return this.httpReq.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+this.key).map(result =>{
//    return result.json();
//   });;
// }
}

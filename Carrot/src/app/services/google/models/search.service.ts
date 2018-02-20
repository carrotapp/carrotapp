import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Distance } from './distance.service';
import { Address } from './address.service';
import { LocationService } from './location.service';
import { GPSLocation } from './gpslocation.service';


@Injectable()
export class Search {
  key = 'AIzaSyCJurPZvQtKnlhLIfzImNtbYzUX_ZuH7rE';
  Locations: GPSLocation[] = [];
  array;

  constructor(public httpReq: Http) {
  }



  search(query: string, currentLocation: LocationService, radius: number, key: string): void {
    this.connect(query, currentLocation, radius, key).subscribe(results => {
      // console.log("here1")
      // console.log(results)
      if (results.results[0] !== undefined) {
        // for( let i = 0 ; i < results.results.length ; i++ ){
        // console.log(results);
        // tslint:disable-next-line:max-line-length
        //   let location:LocationService = new LocationService( results[i].geometry.location.latitude , results[i].geometry.location.longitude );
        //   console.log(location);
        //  //createObject( place_id :string , formatted_address:string , location_type:string , types:string[])
        //  //Response Extraction
        //     let place_id:string = results[i].place_id;
        //     let formatted_address:string = results[i].formatted_address;
        //     let types:string[] =results[i].types;
        //     let location_type:string = types[0]; // 'Superversion'/Most precise form of the location type
        //     let address:Address; // Forced Declaration
        //     let gpslocation:GPSLocation;
        //     address = address.createObject( place_id , formatted_address , location_type , types );
        //     console.log(address);
        //     gpslocation = gpslocation.createGPLocation( location , address );
        //     console.log(gpslocation);
        //     this.Locations.push( gpslocation );
        //     console.log(gpslocation);

        // }

        this.array = results.results;
        // console.log("here")
        // console.log(results.results);
      }

      this.array = results.results;

      // console.log(results.results);
    });
  }
  // -33.926892,18.4436838,17z

  connect(query: string, currentLocation: LocationService, radius: number, key: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.httpReq.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + query + '&location=' + currentLocation.latitude + ',' + currentLocation.longitude + '&radius=' + radius + '&key=' + key).map(results => {
      return results.json();
    });
  }
  /**input=Paris&types=geocode */
  createAddress(lng: number, lat: number): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.httpReq.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.key).map(result => {
      return result.json();
    });
  }
}

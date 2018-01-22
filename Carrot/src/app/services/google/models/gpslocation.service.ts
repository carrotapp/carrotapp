import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocationService } from './location.service';
import { Address } from './address.service';

@Injectable()
export class GPSLocation {
  accuracy:number;  
  location:LocationService;
  address:Address;
  arrAddress:Address[]=[];
 
  constructor( accuracy:number, location:LocationService, httpRequest:Http) { 
    this.accuracy = accuracy;
    this.location = location;
    this.address= new Address( this.location.latitude , this.location.longitude, httpRequest );
    this.createAddress( this.location.longitude , this.location.latitude );
  }
  
  createAddress(lng:number,lat:number):void{
    this.address.createAddress(lng,lat).subscribe(locationTree => {
      /*
      Currently Returns A list of locations who's access points point :nod:
      */
      if( Array.isArray( locationTree ) ){ 
        for ( let i = 0 ; i < locationTree.length ; i++ ){
          /*
           * Exhaustion, Now am stuck coz theres a lot of Dependancies and my mind just got lost in the MA T R I X.
           * If only I could write 'locating method' rather than callback functions
           * Google's Documentation Sucks, Sixolile Mtengwana Rules...
           */
        }
      } else {}
      
      console.log(locationTree);
    });
  }

  public toString():string{
     return '';
  }

}

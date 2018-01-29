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

  constructor( accuracy:number, location:LocationService, protected httpRequest:Http) {
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
      // if( Array.isArray( locationTree.results)  && locationTree.results.length > 0   ){
        setTimeout(()=>{
        //   for ( let i = 0 ; i < locationTree.results.length ; i++ ){
          /*
           * Needed Attributes to create a legitimate object of Address
           */
                      // let place_id:string = locationTree.results[i].place_id;
                      // let formatted_address:string = locationTree.results[i].formatted_address;
                      // let types:string[] = locationTree.results[i].types;
                      // let location_type:string = locationTree.results[i].geometry.location_type;
                      // let location = locationTree.results[i].geometry.location;
                      // let addressObj:Address=  this.address  = new Address( location.lat , location.lng , this.httpRequest  );
                      // addressObj.createObject( place_id , formatted_address , location_type , types );
                      // this.arrAddress.push(addressObj);
         /*
          * Filling up the object with its missing data
          * Assign it to the Array of all possible locations
          */

        // }
        let place_id:string = locationTree.results[0].place_id;
        let formatted_address:string = locationTree.results[0].formatted_address;
        let types:string[] = locationTree.results[0].types;
        let location_type:string = locationTree.results[0].geometry.location_type;
        let location = locationTree.results[0].geometry.location;
        let addressObj:Address = new Address( location.lat , location.lng , this.httpRequest  );
        this.address = addressObj.createObject( place_id , formatted_address , location_type , types );
        console.log(this.address.toString());
      } , 1000 );
      // } else if( Array.isArray( locationTree.results ) && locationTree.results.length === 1) {
        /*
         * The Results are always in an array format, if its length is 1, then only one object needs
         * to be created and this will be due to an approximate location feedback.
         */

        // Instantiates the current address object to eliminat
      // }

    });
  }
  /*
  accuracy:number;
  location:LocationService;
  address:Address
  */

  createGPLocation( location: LocationService , address:Address ):GPSLocation{
    this.location = location;
    this.address = address;
    return this;
  }

  getAddress():Address{
    return this.address.getAddress();
  }
  public toString():string{
     return 'Co-Ordinate:\t '+ this.location.toString()+'\nAccuracy:\t'+ this.accuracy + '\nAddress:\n' +this.address.toString();

  }

}

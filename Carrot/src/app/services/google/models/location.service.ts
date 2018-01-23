import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {
  latitude:number;
  longitude:number;

/*
 * Currently Returns Co-Ordinates based on the Network Providers 
 */
  
  constructor( latitude:number , longitude:number ) { 
    this.latitude = latitude;
    this.longitude = longitude;
  }
  public toString(): string {
    return '';
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {
  latitude: number;
  longitude: number;

  /*
   * Currently Returns Co-Ordinates based on the Network Providers
   */

  constructor() {
  }

  public toString(): string {
    return 'Longitude: \t ' + this.longitude + '\nLatitude: \t ' + this.latitude;
  }

  construct(lat:number, long:number) {
    this.latitude = lat;
    this.longitude = long;
  }

}

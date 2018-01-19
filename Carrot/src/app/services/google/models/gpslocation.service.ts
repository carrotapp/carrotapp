import { Injectable } from '@angular/core';
import { LocationService } from './location.service';

@Injectable()
export class GPSLocation {
  accuracy:number;  
  location:LocationService;

  constructor( accuracy:number, location:LocationService) { 
    this.accuracy = accuracy;
    this.location = location;
  }

  public toString():string{
     return '';
  }

}

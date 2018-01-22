import { Injectable } from '@angular/core';
import { Distance } from './distance.service';
import { Address } from './address.service';

@Injectable()
export class Search {
  place_id:string;
  description:string;
  distance:Distance;
  address:Address;

  constructor(keyword:string) { 
    
  }

}

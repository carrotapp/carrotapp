import { Injectable } from '@angular/core';

@Injectable()
export class Distance {
text:string;
value:number;

  constructor( text:string, value:number ) { 
    this.text = text;
    this.value = value;
  }
  

}

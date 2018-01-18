import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable'  <= Does not want to become a return type for apiRequest method
@Injectable()
export class Map {
   key:string ="AIzaSyCJurPZvQtKnlhLIfzImNtbYzUX_ZuH7rE ";
   apiList:string[]=[ // Future: Change to object
     '','','','','','','','',''
   ];
  constructor( protected httpRequest : Http ) {

   }

   apiRequest(api:string,command:string){
     return this.httpRequest.get('https://maps.googleapis.com/maps/api/'+api+'/json?'+command+'&'+this.key).map(results => { results.json()});
   }
  getCommand(api:number):string{
    return this.apiList[api];
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Distance } from './distance.service';
import { Address } from './address.service';


@Injectable()
export class Search {
  key = 'AIzaSyCJurPZvQtKnlhLIfzImNtbYzUX_ZuH7rE';
  place_id:string;
  description:string;
  distance:Distance;
  address:Address;

  constructor(public httpReq:Http) { 
  //  this.search();
  }

    

  search():void{
      this.connect().subscribe( results => {
        console.log(results)
      });
  }
  //-33.926892,18.4436838,17z

  connect():Observable<any>{
return this.httpReq.post('Access-Control-Request-Method:https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyCJurPZvQtKnlhLIfzImNtbYzUX_ZuH7rE',{})
// .map( res=>{
//    console.log( res.json());
// return res.json();
// });
  }
/**input=Paris&types=geocode */
createAddress(lng:number,lat:number):Observable<any>{
  return this.httpReq.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+this.key).map(result =>{
   return result.json();
  })
}
}

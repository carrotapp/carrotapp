
import { MapService } from './../services/google/maps.service'; 
import { Component, OnInit } from '@angular/core'; 
import { GPSLocation } from '../services/google/models/gpslocation.service'; 
import { google } from '@agm/core/services/google-maps-types'; 

@Component({ 
  selector: 'app-maps', 
  templateUrl: './maps.component.html', 
  styleUrls: ['./maps.component.css'] 
}) 
export class MapsComponent implements OnInit { 
  location: GPSLocation[]; 
  lat; 
  lon; 

  // coordinates: Coordinate[] = [
  //   {lat: -33.927884, lon: 18.425275},
  //   {lat: -33.9271043, lon: 18.4457914},
  //   {lat: -33.9246244, lon: 18.4171764},
  //   {lat: -33.9211185, lon: 18.421670199999998},

  // ];

  // -33.927884,18.425275
  // -33.927884,18.425275

  // -33.9271043,18.4457914
  // -33.9246244,18.4171764,14


 
  constructor(public map: MapService){ 
    // this.location = map.getCurrentLocation(); 
    // map.locate(); 
    // console.log(map.getCurrentLocation.location.latitude);   
    
    // let myLocation = {
    //   lat: 23.8701334,
    //   lng: 90.2713944
    // };
    
    // let z = map.apiRequest()
    // let m = new google.maps.Map(document.getElementById('map'), {
      // center: { lat: 23.8701334, lng: 90.2713944 },
      // zoom: 10
    // })

    // let service = new google.maps.places.PlacesService(m);
    // service.nearbySearch({
    //   location: myLocation,
    //   radius: 4000,
    //   types: ['hospital']
    // }, this.processResults);

    // console.log(); 
  } 

  ngOnInit() {
    this.getUserLocation()
  }

  private getUserLocation() {

   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lon = position.coords.longitude;
     });
   }
  }

  //  processResults(results, status, pagination) {
  //   if (status !== google.maps.places.PlacesServiceStatus.OK) {
  //     return;
  //   } else {
  //     console.log(results );

  //   }
  // } 
 
 
 
} 
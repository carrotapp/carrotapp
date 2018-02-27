// import { Coordinate } from './Coordinate';
import { MapService } from './../services/google/maps.service';
import { Component, ViewChild } from '@angular/core';
import { GPSLocation } from '../services/google/models/gpslocation.service';
import { DatabaseService } from '../services/database/database.service';
import { ThemesService } from '../services/themes.service';
import { RoutingListenerService } from '../services/routing-listener.service';
import { Search } from '../services/google/models/search.service';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { } from '@type/googlemaps';
import { Router } from '@angular/router';
import { MapDirectionsDirective } from './map-directions.directive';

declare var google: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  providers: [GoogleMapsAPIWrapper]

})
export class MapsComponent {
  @ViewChild(MapDirectionsDirective) vc: MapDirectionsDirective;

  lat = 0;
  lng = 0;

  origin = {
    lat: 0,
    lng: 0
  };

  destination = {
    lat: 0,
    lng: 0
  };

  directionsDisplay;

  nearestLocations: any[] = [];

  //New AGM node-module
  constructor(private mapsAPILoader: MapsAPILoader, private gmapsApi: GoogleMapsAPIWrapper, private routerListener: RoutingListenerService, private router: Router) {


  }

  //New AGM node-module
  ngOnInit() {

    this.currentLocation()

    if (this.routerListener.coupon === undefined) {
      this.router.navigate(['/main/dashboard']);
    }
  }


  //When map is ready gets all nearby locations in a 5km radius.

  mapReady($event: any) {
    this.mapsAPILoader.load().then(() => {
      // this.origin=new google.maps.LatLng(this.lat,this.lng)
      // this.currentLocation()
      let placeService = new google.maps.places.PlacesService($event);
      placeService.nearbySearch({
        location: this.origin,
        name: this.routerListener.coupon.Location,
        radius: 5000,
        // types: ['store']
      }, (results, status) => {
        // console.log(status);
        // console.log("out"+results);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // console.log("in"+results);
          this.nearestLocations = results;
          for (var i = 0; i < results.length; i++) {
            // if (results[i].name.search(RegExp('','i'))>-1) {

            console.log(results[i].name);
            // }
          }


        }
      });
    });
  }



  // setDestination(lat: number, lng: number) {

  //   this.destination = {
  //     lat: lat,
  //     lng: lng
  //   }
  //   console.log("set destination", this.destination);
  //   console.log("in set destination origin", this.origin)
  //   this.mapsAPILoader.load().then(map => {

  // this.origin=new google.maps.LatLng(this.lat,this.lng);
  //console.log(map)
  //   this.directionsDisplay = new google.maps.DirectionsRenderer();
  //   console.log(this.directionsDisplay)
  // });

  // console.log({
  //   lat: lat,
  //   lng: lng
  // })
  // }

  //Gets current location.
  currentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.origin = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

      });
    }
  }

} 

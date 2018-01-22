import { MapService } from './../services/google/maps.service';
import { Component, OnInit } from '@angular/core';
import { GPSLocation } from '../services/google/models/gpslocation.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  location: GPSLocation[];
  lat = -33.9211185;
  lon = 18.421670199999998;

  constructor(public map: MapService) {
    map.locate();
    console.log(map.getCurrentLocation.location.latitude);
  }

  ngOnInit() {
  }

}

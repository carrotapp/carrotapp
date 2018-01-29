// import { Coordinate } from './Coordinate';
import { MapService } from './../services/google/maps.service';
import { Component } from '@angular/core';
import { GPSLocation } from '../services/google/models/gpslocation.service';
import { google } from '@agm/core/services/google-maps-types';
import { DatabaseService } from '../services/database/database.service';
import { ThemesService } from '../services/themes.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent   {
  constructor(public map: MapService) {

  }
} 

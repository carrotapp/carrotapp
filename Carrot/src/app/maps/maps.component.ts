import { LocationService } from './../services/google/models/location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from './../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../services/themes.service';



@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor( private dbs: DatabaseService ,  private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {


  }
 


}

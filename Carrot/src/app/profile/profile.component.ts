import { DatabaseService } from './../services/database/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(protected ds: DatabaseService) { }

  ngOnInit() {
  }

}

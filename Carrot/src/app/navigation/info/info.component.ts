<<<<<<< HEAD
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit } from '@angular/core';


=======
import { Component, OnInit } from '@angular/core';

>>>>>>> parent of 7cab69b... Info Component
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
<<<<<<< HEAD
  userRewards: FirebaseListObservable<any[]>;

  constructor(public router: Router, private databaseService: DatabaseService) { }
=======

  constructor() { }
>>>>>>> parent of 7cab69b... Info Component

  ngOnInit() {
  }

}

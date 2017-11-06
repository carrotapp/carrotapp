import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  userRewards: FirebaseListObservable<any[]>;

  constructor(public router: Router, private databaseService: DatabaseService) { }



  ngOnInit() {
  }

}

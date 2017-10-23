import { Rewards } from './Rewards';
import { DatabaseService } from '../services/database/database.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rewards: Rewards[] = [];

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router: Router, private ds: DatabaseService) {

    try {
      if (afAuth.auth.currentUser.uid === null) {
        console.log('null');
      } else {
        this.rewards = ds.getRewardsArray(afAuth.auth.currentUser.uid, afDB);
      }

    } catch (error) {
      if (error = 'TypeError: Cannot read property "uid" of null') {
        alert('You are not logged in');
        this.router.navigate(['/']);
      }
    }

  }
 
  ngOnInit() {
  }

}
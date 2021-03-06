import { Observable } from 'rxjs/Observable';
import { DatabaseService } from './../services/database/database.service';
import { Rewards } from './Rewards';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  rewards: Observable<any>;
  username: string;
  path_username;
  showReward: boolean;
  hasRewards = false;
  cnt = 0;

  constructor(public ds: DatabaseService, private afAuth: AngularFireAuth, private router: Router) {
    this.rewards = ds.rewardsRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    ds.getUsersRewards();
  }

  ngOnInit() {
  }

  send() {
    this.hasRewards = true;
    return true;
  }

  check() {
    return this.hasRewards;
  }

}

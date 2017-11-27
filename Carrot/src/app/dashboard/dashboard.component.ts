import { DatabaseService } from './../services/database/database.service';
import { Rewards } from './Rewards';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  rewards: Rewards[] = [];
  username: string;
  path_username;
  showReward: boolean;


  constructor(private ds: DatabaseService, private afAuth: AngularFireAuth, private router: Router) {
    if (ds.checkLoggedIn()) {
      this.sync();
    }
  }

  sync() {
    this.router.events.subscribe(() => {
      setTimeout(() => {
        this.rewards = this.ds.getRewardsArray();
      }, 10);
      // console.log(this.rewards);

      // console.log(this.rewards.length);
      // this.path_username = this.ds.pathName(this.ds.getName());
    });
  }

}

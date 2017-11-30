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
  rewards: Rewards[] = [];
  username: string;
  path_username;
  showReward: boolean;


  constructor(protected ds: DatabaseService, private afAuth: AngularFireAuth, private router: Router) {
    
  }

  ngOnInit() {
    this.ds.rewardsArray = [];
    this.rewards = [];
    this.rewards = this.ds.getRewardsArray();
    // console.log(this.ds.theme);
    // this.sync();
  }

  sync() {
    this.router.events.subscribe(() => {
      setTimeout(() => {
        this.ds.rewardsArray = [];
        this.rewards = [];
        this.rewards = this.ds.getRewardsArray();
        // console.log(this.rewards);
      }, 10);
      // console.log(this.rewards);

      // console.log(this.rewards.length);
      // this.path_username = this.ds.pathName(this.ds.getName());
    });
  }

}

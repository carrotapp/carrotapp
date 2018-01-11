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
  // rewards: Rewards[] = [];
  rewards: Observable<any[]>;
  username: string;
  path_username;
  showReward: boolean;
  hasRewards: boolean = false;


  constructor(protected ds: DatabaseService, private afAuth: AngularFireAuth, private router: Router) {
    this.ds.getUsersRewards()
  }

  ngOnInit() {
    // console.log(this.rewards);
    // this.ds.rewardsArray = [];
    // console.log(this.ds.theme);
    // this.sync();
  }

  send(){

    this.hasRewards = true;
    return true;
  }

  check() {
    // console.log(this.ds.userRewards + "e");

    // this.ds.userRewards.forEach(res => {
    //   res.map(result => {
    //     console.log(result);
        
    //   });
      return this.hasRewards;
    
    // });

    // this.rewards.subscribe(res => {
    //   res.map(result => 
    //     if (key === this.rewards[1].key) {
    //       return true;
    //     }
    //   });
    //   return false;
    // });
  }

}

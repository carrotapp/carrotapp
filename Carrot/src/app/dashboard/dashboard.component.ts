import { DatabaseService } from './../services/database/database.service';
import { Rewards } from './Rewards';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


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
  


  constructor(private ds: DatabaseService) {
    if (ds.checkLoggedIn()) {
      ds.rewardsArray = [];
      this.rewards = [];
      ds.getRewardsArray();
      }

    // console.log((this.rewards.length == 0) + "test");
    // if(this.rewards.length == 0){
    //  DatabaseService.hasRewards = false;
    // }else{
    //   DatabaseService.hasRewards = true;
    // }
   // console.log((this.showReward) + "check");
  }

  ngOnInit() {
    this.path_username = this.ds.pathName(this.ds.getName());
  }

  // getter
  get pathName() {
    return this.path_username;
  }

// get hasRewards(){
//   return DatabaseService.hasRewards;
// }

}

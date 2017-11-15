import { DatabaseService } from './../services/database/database.service';
import { Rewards } from './Rewards';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  rewards: Rewards[] = [];
  username:string;
  path_username;
  showReward: boolean;
  

  constructor(private ds: DatabaseService,private afAuth: AngularFireAuth) {
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
    this.rewards = this.ds.rewardsArray;
    console.log(this.rewards);
    this.username = this.afAuth.auth.currentUser.displayName;
    this.path_username = this.toLowerPath(this.afAuth.auth.currentUser.displayName);
  }

 // Routing to lower
toLowerPath(name:string):string{ 
  return name.toLowerCase().replace(/ /g,'.');
}
//getter
get pathName(){
  return this.path_username;
}

// get hasRewards(){
//   return DatabaseService.hasRewards;
// }

}

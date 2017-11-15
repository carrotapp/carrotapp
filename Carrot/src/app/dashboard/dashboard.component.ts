import { Rewards } from './Rewards';
import { DatabaseService } from '../services/database/database.service';
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
  

  constructor(private ds: DatabaseService,private afAuth: AngularFireAuth) {
    if (ds.checkLoggedIn()) {
      ds.rewardsArray = [];
      this.rewards = [];
      ds.getRewardsArray();
    }
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


}

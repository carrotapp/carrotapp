import { Rewards } from './Rewards';
import { DatabaseService } from '../services/database/database.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  rewards: Rewards[] = [];
  username:string;
  path_username;
  

  constructor(private ds: DatabaseService,private afAuth: AngularFireAuth, private router : Router) {
    if (ds.checkLoggedIn()) {
        this.sync();
    }
  }

  sync(){
    this.router.events.subscribe(()=>{
      setTimeout(()=>{
        this.rewards = this.ds.getRewardsArray();
      }, 100);
      console.log(this.rewards);

  console.log(this.rewards.length); 

      this.username = this.afAuth.auth.currentUser.displayName
      this.path_username = this.toLowerPath(this.afAuth.auth.currentUser.displayName);
    });
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

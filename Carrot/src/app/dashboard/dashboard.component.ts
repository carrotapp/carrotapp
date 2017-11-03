import { Rewards } from './Rewards';
import { DatabaseService } from '../services/database/database.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  rewards: Rewards[] = [];
  username:string;
  path_username;
  

  constructor(private ds: DatabaseService,private afAuth: AngularFireAuth) {
    if (ds.checkLoggedIn()) {
      this.rewards = ds.getRewardsArray();
      this.username = this.afAuth.auth.currentUser.displayName
      this.path_username = this.toLowerPath(this.afAuth.auth.currentUser.displayName);
    }
  }

 // Routing to lower
toLowerPath(name:string):string{
  return name.toLowerCase().replace(' ','.');
}
//getter
get pathName(){
  return this.path_username;
}


}

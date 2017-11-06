import { Observable } from 'rxjs/Observable';
import { DatabaseService } from '../services/database/database.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})

export class RewardsComponent {
  data: Observable<any[]>;
  username:string;
  path_username;

  constructor(private databaseService: DatabaseService, private afAuth: AngularFireAuth) {
    if (databaseService.checkLoggedIn()) {
      this.data = databaseService.getRewards();
      this.username = this.afAuth.auth.currentUser.displayName
      this.path_username = this.toLowerPath(this.afAuth.auth.currentUser.displayName);
    }
  }

  addRewards(key: string) {
    this.databaseService.addRewards(key);
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
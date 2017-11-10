import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from '../services/database/database.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})

export class RewardsComponent {
  data: Observable<any[]>;
  username: string;
  path_username;

  constructor(private databaseService: DatabaseService) {
    if (databaseService.checkLoggedIn()) {
      this.data = databaseService.getRewards();
<<<<<<< HEAD
      console.log(databaseService.getRewards());
      console.log(this.data);
      this.username = databaseService.getName();
      this.path_username = databaseService.pathName(this.username);
=======
      this.username = this.afAuth.auth.currentUser.displayName
      this.path_username = this.toLowerPath(this.afAuth.auth.currentUser.displayName);
>>>>>>> Sixolile-Mtengwana
    }
  }

  addRewards(key: string) {
    this.databaseService.checkReward(key);
  }

  // getter
  get pathName() {
    return this.path_username;
  }
}

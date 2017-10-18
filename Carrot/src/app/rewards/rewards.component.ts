import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseService } from '../services/database/database.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})

export class RewardsComponent {
  data: FirebaseListObservable<any[]>;

  constructor(private databaseService: DatabaseService) {
    if (databaseService.checkLoggedIn()) {
      this.data = databaseService.getRewards();
    }
  }

  addRewards(key: String) {
    this.databaseService.addRewards(key);
  }
}

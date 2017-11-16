import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from '../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { Rewards } from '../dashboard/Rewards';

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
      this.path_username = databaseService.pathName(databaseService.getName());
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

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

export class RewardsComponent implements OnInit{
  data: Rewards[];
  username: string;
  path_username;

  constructor(private databaseService: DatabaseService) {
    if (databaseService.checkLoggedIn()) {
      databaseService.getAllRewards();
      this.username = databaseService.getName();
      this.path_username = databaseService.pathName(this.username);
      // databaseService.getAllRewards();
    }
  }
  
  ngOnInit() {
    this.data = this.databaseService.getRewards();
    console.log(this.databaseService.getRewards());
    console.log(this.data);
  }

  addRewards(key: string) {
    this.databaseService.checkReward(key);
  }

  // getter
  get pathName() {
    return this.path_username;
  }
}

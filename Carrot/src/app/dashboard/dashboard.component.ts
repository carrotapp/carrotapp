import { Rewards } from './Rewards';
import { DatabaseService } from '../services/database/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rewards: Rewards[] = [];

  constructor(private ds: DatabaseService) {

    if (ds.checkLoggedIn()) {
      this.rewards = ds.getRewardsArray();
      // console.table(ds.getRewardsArray());
    }

  }

  ngOnInit() {
  }

}

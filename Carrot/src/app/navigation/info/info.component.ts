import { Rewards } from './../../dashboard/Rewards';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  rewards: Rewards[] = [];

 constructor(public dbs: DatabaseService) {
    this.rewards = dbs.getRewardsArray();
    console.log(this.rewards);
  }

 ngOnInit() {
  }

}

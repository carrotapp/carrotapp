import { DatabaseService } from '../services/database/database.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRewards: FirebaseListObservable<any[]>;
  data: FirebaseListObservable<any[]>;
  myItems: any[];
  index = 0;

  rewards: Rewards[] = [];

  constructor(private ds: DatabaseService) {
    if (ds.checkLoggedIn()) {
      this.userRewards = ds.getUsersRewards();

      this.userRewards.forEach(element => {
        for (let i = 0; i < element.length; i++) {
          // console.log(element[i].$key);
          // console.log(element[i].$value);
          this.data = this.ds.getRewardsData(element[i].$key);
          this.data.forEach(dataElement => {
            this.myItems = dataElement;
            this.rewards.push(new Rewards(this.myItems, element[i].$value));
          });
        }
      });
    }
  }

  ngOnInit() {
  }

}


export class Rewards {
  Currency;
  Image;
  RewardName;
  Name;
  Ratio;
  Value;

  constructor(array, value) {
    this.Currency = array[0].$value;
    this.Image = array[1].$value;
    this.RewardName = array[2].$value;
    this.Name = array[3].$value;
    this.Ratio = array[4].$value;
    this.Value = value;
  }

}


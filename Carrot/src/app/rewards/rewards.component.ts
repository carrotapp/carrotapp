import { element } from 'protractor';
import { Rewards } from './../dashboard/Rewards';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from '../services/database/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})

export class RewardsComponent implements OnInit {
  data: Observable<any[]>;
  rewards: Rewards[] = [];
  amountRewards = 0;

  constructor(protected databaseService: DatabaseService) {
    this.data = this.databaseService.rewardsRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    databaseService.getUsersRewards();
    databaseService.rewardsArray = [];
    databaseService.getRewardsArray();
  }

  ngOnInit() {
  }

  check(key) {
    for (let i = 0; i < this.databaseService.rewardsArray.length; i++) {
      if (key === this.databaseService.rewardsArray[i].Key) {
        return false;
      }
    }
    return true;
  }

}

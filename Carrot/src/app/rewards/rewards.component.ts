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

  constructor(private databaseService: DatabaseService) {
    this.rewards = databaseService.getRewardsArray();
  }

  ngOnInit(){
    this.data = this.databaseService.getRewards();
    this.rewards = [];
    this.rewards = this.databaseService.getRewardsArray();
  }

  check(key){
    for(let i = 0; i < this.rewards.length; i++){

      if(key === this.rewards[i].Key){
        return false;
      }
      
    }
    return true;
  }

}

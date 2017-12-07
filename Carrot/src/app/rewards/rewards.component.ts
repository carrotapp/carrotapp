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
    databaseService.getRewardsArray();
    this.data = this.databaseService.getRewards();
  }
  
  ngOnInit(){
    this.rewards = this.databaseService.rewardsArray;
    // console.log(this.rewards);
  }

  check(key){
    for(let i = 0; i < this.rewards.length; i++){

      if(key === this.rewards[i].Key){
        // console.log(false);
        return false;
      }
      
    }
    // console.log(true);
    return true;
  }

}

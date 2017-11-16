import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../services/database/database.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Rewards } from '../dashboard/Rewards';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-rewards-credentials',
  templateUrl: './rewardsCredentials.component.html',
  styleUrls: ['./rewardsCredentials.component.css']
})
export class RewardsCredentialsComponent implements OnInit {
  data: Observable<any[]>;
  cardNum = '';
  email = '';
  password = '';
  key = '';

  constructor(protected databaseService: DatabaseService) {
    if (databaseService.checkLoggedIn()) {
      this.key = databaseService.rewardKey;
    }
  }

  ngOnInit() {
  }

  addReward() {
    // console.log(this.key);
    if (this.cardNum !== '' && this.email !== '' && this.password !== '') {
      this.databaseService.addRewards(this.key, this.cardNum, this.email, this.password);
    } else {
      alert('Please fill out all the fields');
    }

    this.cardNum = '';
    this.email = '';
    this.password = '';
  }

}

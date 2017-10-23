import { Rewards } from './Rewards';
import { DatabaseService } from '../services/database/database.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rewards: Rewards[] = [];

  constructor(private ds: DatabaseService) {

    if(ds.checkLoggedIn()){
      this.rewards = ds.getRewardsArray();
    }

  }
 
  ngOnInit() {
  }

}
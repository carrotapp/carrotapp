import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../services/database/database.service';

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

  constructor(private databaseService: DatabaseService) {
    if (databaseService.checkLoggedIn()) {
      console.log('Logged in');
    }
  }

  ngOnInit() {
  }

  addReward() {
    if (this.cardNum !== '' && this.email !== '' && this.password !== '') {
      this.databaseService.addRewards(this.cardNum, this.email, this.password, 0);
    } else {
      alert('Please fill out all the fields');
    }
  }

}

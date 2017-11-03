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

  constructor(private databaseService: DatabaseService) {
    if (databaseService.checkLoggedIn()) {
      console.log(databaseService.rewardKey);
    }
  }

  ngOnInit() {
  }

}

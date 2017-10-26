import { Observable } from 'rxjs/Observable';
import { DatabaseService } from '../services/database/database.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})

export class RewardsComponent {
  data: Observable<any[]>;

  constructor(private databaseService: DatabaseService) {
    if (databaseService.checkLoggedIn()) {
      this.data = databaseService.getRewards();
    }
  }

  addRewards(key: string) {
    this.databaseService.addRewards(key);
  }
}

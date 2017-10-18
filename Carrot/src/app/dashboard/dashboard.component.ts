import { DatabaseService } from '../services/database/database.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userRewards: FirebaseListObservable<any[]>;

  constructor(public router: Router, private databaseService: DatabaseService) {
    if (this.databaseService.checkLoggedIn()) {
      this.userRewards = this.databaseService.getUsersRewards();
    }
  }

  navigate() {
    this.router.navigate(['/rewards']);
  }

}

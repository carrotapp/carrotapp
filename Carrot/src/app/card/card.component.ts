import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ThemesService } from '../services/themes.service';
import { HeaderComponent } from '../navigation/header/header.component';
import { Observable } from 'rxjs/Observable';
import { Rewards } from '../dashboard/Rewards';
import { DatabaseService } from '../services/database/database.service';
import { RoutingListenerService } from '../services/routing-listener.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input('reward')
  reward;
  @Input('userData') userData;
  @Input('type') type: string;
  @Input('isHidden')
  isHidden: boolean;
  isOnAccount = false;
  isFlip: boolean; // Controls Styling

  // tslint:disable-next-line:max-line-length
  constructor(private routerListener: RoutingListenerService, public themes: ThemesService, protected databaseService: DatabaseService, protected router: Router) {

  }

  ngOnInit() {
    if (this.userData.Points !== undefined) {
      this.isOnAccount = true;
      this.isFlip = true;
    }
  }

  get theme() {
    return this.themes.getTheme();
  }

  flip(): void {
    if (this.isHidden) {
      this.isFlip = !this.isFlip;
    }
  }

  addReward() {
    this.routerListener.activeReward(this.reward, this.isOnAccount);
    this.routerListener.activate();
  }

  moreInfo(key) {
    this.databaseService.setKey(key);
    this.routerListener.activeReward(this.reward, this.isOnAccount);
    this.router.navigate(['/main/info']);
  }

}

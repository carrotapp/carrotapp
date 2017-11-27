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
  // item skeleton
  @Input('reward')
  reward;
  // Type
  @Input('type') type: string;
  // hide
  @Input('isHidden')
  isHidden: boolean;

  // data: Rewards[];
  // userRewards: Rewards[];

  constructor(private routerListener: RoutingListenerService, public themes: ThemesService, protected databaseService: DatabaseService) {
    if (databaseService.checkLoggedIn()) {
      // databaseService.getAllRewards();
    }
  }

  ngOnInit() {
    // this.userRewards = this.databaseService.getRewardsArray();
    // this.data = this.databaseService.getRewards();
  }

  get theme() {
    return this.themes.getTheme();
  }
  get getUsername() {
    return this.databaseService.pathName(this.databaseService.getName());
  }

  addReward() {
    // const flag = this.databaseService.checkReward(this.reward.Key);
    // this.databaseService.rewardFlag = undefined;
    this.databaseService.checkReward(this.reward.key);

    setTimeout(() => {
      // console.log('timeout function');
      console.log(this.databaseService.rewardFlag);

      if (!this.databaseService.rewardFlag) {
        alert(' You already have ' + this.reward.Name + ' in your account! ');
      } else {
        this.routerListener.activeReward(this.reward);
        this.routerListener.activate();
      }

    }, 10);



  }
  moreInfo() {
    // console.log(this.reward.Name);
    this.routerListener.activeReward(this.reward);
    // tslint:disable-next-line:max-line-length
    this.databaseService.redirect('/' + this.databaseService.pathName(this.databaseService.getName()) + '/' + this.databaseService.pathName(this.reward.Name) + '/' + this.type);
  }
}

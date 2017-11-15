import { Component, Input } from '@angular/core';
import { ThemesService } from '../services/themes.service';
import { HeaderComponent } from '../navigation/header/header.component';
import { Observable } from 'rxjs/Observable';
import { Rewards } from '../dashboard/Rewards';
import { DatabaseService } from '../services/database/database.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RoutingListenerService } from '../services/routing-listener.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // item skeleton
  @Input('reward') reward: Rewards;
  // surname
  @Input('username') username: string;
  // Type
  @Input('type') type: string;
  // hide
  @Input('isHidden') isHidden: boolean;

  data: Rewards[];
  userRewards: Rewards[];

  constructor(  private routerListener: RoutingListenerService ,public themes: ThemesService, protected databaseService: DatabaseService) {
    if (databaseService.checkLoggedIn()) {

    }
  }

  ngOnInit() {
    this.userRewards = this.databaseService.getRewardsArray();
    this.data = this.databaseService.getRewards();
  }

  get theme() {
    return this.themes.getTheme();
  }
  get getUsername() {
    return this.databaseService.pathName(this.username);
  }

  addReward() {
    if (this.isExists()) {
      alert(' You already have ' + this.reward.Name + ' in your account! ');
    } else {
      this.routerListener.activeReward( this.reward );
      this.routerListener.activate();
    }
  }

  isExists(): boolean {
    let exists: boolean = false;
    console.log(this.data);
    console.log(this.reward.Name +'  dfdsffd')
    for (let i = 0; i < this.data.length; i++) {
      console.log(i);
      if (this.reward.Key === this.data[i].Key) {
        console.log('Found reward')
        return this.reward.Key === this.data[i].Key;
      }
    }
    console.log(exists);
    return exists;
  }


  // setInfo() {
  //   this.databaseService.checkReward(this.reward.key);
  // }
}

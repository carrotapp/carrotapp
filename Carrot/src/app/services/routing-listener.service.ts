import { Injectable } from '@angular/core';
import { DatabaseService } from './database/database.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Rewards } from '../dashboard/Rewards';

@Injectable()
export class RoutingListenerService {
  static isActivated = true;
  private username: string;
  private rewardName: string;
  private provider: string;
  private action: string;

  // reward: Rewards = {
  //   Currency: 'cpts',
  //   Image: 'http://www.fetchrewards.com/assets/GiftBox.png',
  //   ProviderName: 'Carrot Rewards',
  //   Name: 'Carrot',
  //   Ratio: '2',
  //   Value: '1500',
  //   infoUrl: 'https://carrot-app.firebaseapp.com/login',
  //   summary: 'Carrot integrates everything for you so that you do not have too!!!',
  //   CardNumber: '1234567890',
  //   Email: 'carrot@mail.com',
  //   Password: 'c@rRoT123',
  //   Points: '21372',
  //   Key: 'CJHSakdh23qhHSdhb',
  //   how: '',
  //   where: ''
  // };
  reward;
  isOnAccount: boolean;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private databaseService: DatabaseService) {
    RoutingListenerService.isActivated = true;
  }
  status(): boolean {
    return this.provider !== undefined && this.username !== undefined;
  }

  activeReward(reward, isOnAccount): void {
    // this.databaseService.checkReward(reward.Key);
    this.reward = reward;
    this.isOnAccount = isOnAccount;
  }
  activate(): void {
    this.databaseService.checkReward(this.reward.key);
    RoutingListenerService.isActivated = !RoutingListenerService.isActivated;
  }

  subscribeParameter() {
    this.activatedRoute.params.subscribe((parameters: Params) => {
      this.username = parameters.username;
      this.rewardName = parameters.reward;
      this.provider = parameters.provider;
      this.action = parameters.type;
    });
  }

  get getAcivity() {
    return RoutingListenerService.isActivated;
  }
  get getReward() {
    return this.reward;
  }

}

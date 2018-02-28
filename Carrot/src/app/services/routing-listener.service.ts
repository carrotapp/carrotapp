import { Injectable } from '@angular/core';
import { DatabaseService } from './database/database.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Rewards } from '../dashboard/Rewards';

@Injectable()
export class RoutingListenerService {
  coupon: any;
  private username: string;
  private rewardName: string;
  private provider: string;
  private action: string;

  reward;
  isOnAccount: boolean;
  // tslint:disable-next-line:member-ordering
  static isActivated = true;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private databaseService: DatabaseService) {
    RoutingListenerService.isActivated = true;
  }
  status(): boolean {
    return this.provider !== undefined && this.username !== undefined;
  }

  activeReward(reward, isOnAccount): void {
    this.reward = reward;
    this.isOnAccount = isOnAccount;
  }
  activate(): void {
    this.databaseService.checkReward(this.reward.id);
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
  setReward(reward): void {
    this.reward = reward;
  }
  setCoupon(coupon): void {
    this.coupon = coupon;
  }
  get getAcivity() {
    return RoutingListenerService.isActivated;
  }
  get getReward() {
    return this.reward;
  }

}

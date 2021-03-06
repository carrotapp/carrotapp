import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../services/database/database.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RoutingListenerService } from '../services/routing-listener.service';
import { Rewards } from '../dashboard/Rewards';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  reward;
  type: string;
  provider: string;

  icon = 'fa fa-eye';
  typeInput = 'password';

  // tslint:disable-next-line:max-line-length
  constructor(public routerListener: RoutingListenerService, private sanitizer: DomSanitizer, private router: Router, private activatedRoute: ActivatedRoute, private databaseService: DatabaseService) {
    this.reward = routerListener.getReward;
  }

  ngOnInit() {
  }

  assign() {
    this.activatedRoute.params.subscribe((parameters: Params) => {
      this.type = parameters.type;
      this.provider = parameters.provider;
    });
  }

  setReward(reward: Rewards): void {
    this.reward = reward;
  }

  get getActivity() {
    return RoutingListenerService.isActivated;
  }

  get Reward() {
    return this.routerListener.getReward;
  }

  checkCredentials() {
    if (this.email !== '' && this.cardNum !== '' && this.password !== '') {
      if (this.cardNum.length === 13) {
        this.databaseService.addRewards(this.cardNum, this.email, this.password, this.Reward);
        this.routerListener.activate();
      } else {
        if (this.cardNum.length > 13) {
          alert('Error: Length of card number exceeds 13 digits, re-enter card number');
        }
        if (this.cardNum.length < 13) {
          alert('Error: Miminum card number length is 13 re-enter card number');
        }
        this.cardNum = '';
      }
    } else {
      alert('Error: Fill in all the fields');
    }
  }

  showPassword() {
    if (this.typeInput === 'password') {
      this.typeInput = 'text';
      this.icon = 'fa fa-eye-slash';
    } else {
      this.typeInput = 'password';
      this.icon = 'fa fa-eye';
    }
  }
}

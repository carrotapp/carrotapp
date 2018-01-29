import { element } from 'protractor';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Rewards } from './../../dashboard/Rewards';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../../services/database/database.service';
import { ThemesService } from '../../services/themes.service';
import { RoutingListenerService } from '../../services/routing-listener.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  type: string;
  provider: string;
  rKey: string;
  Points: number;
  Ratio: number;
  show: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(public dbs: DatabaseService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, public themes: ThemesService, private routerListener: RoutingListenerService) {
    this.show = false;
  }

  ngOnInit() {
    this.getReward();
    this.rKey = this.dbs.getKey();
    this.dbs.rewards.subscribe(result => {
      this.dbs.usersRewards.subscribe(res => {
        result.map(reward => {
          res.map(userReward => {
            if (userReward.key === this.rKey) {
              this.show = true;
              this.Points = userReward.Points;
              this.Ratio = userReward.Points / reward.Ratio;
            }
          });
        });
      });
    });
  }

  getReward() {
    this.Reward.infoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.Reward.infoUrl);
  }

  back() {
    this.dbs.back();
  }

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get theme(): string {
    return this.themes.getTheme();
  }

  get Reward() {
    return this.routerListener.getReward;
  }
  X
}

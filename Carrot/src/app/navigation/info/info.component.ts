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
  // src: SafeUrl;
  // Router Include
  type: string;
  provider: string;
  constructor(public dbs: DatabaseService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, public themes:ThemesService, private routerListener : RoutingListenerService) {
    if (dbs.checkLoggedIn()) {
      // this.rewards = dbs.getRewardsArray();
    }

    // this.getRewardKey();
  }

  ngOnInit() {
    this.getReward();
  }

  assign() {
    this.route.params.subscribe((parameters: Params) => {
      this.type = parameters.type;
      this.provider = parameters.provider;
    });
  }
  getReward() {
    this.Reward.infoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.Reward.infoUrl);
  }
  back() {
    this.dbs.back();
  }
  safe( url :string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  get theme(): string {
    return this.themes.getTheme();
  }
  get Reward(){
    return this.routerListener.getReward;
  }

}

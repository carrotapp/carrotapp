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
  // src: SafeUrl;
  // Router Include
  type: string;
  provider: string;
  rKey: string;
  Points: number;
  Ratio: number;
  show: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(public dbs: DatabaseService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, public themes:ThemesService, private routerListener : RoutingListenerService) {
    // this.getRewardKey();

    this.show = false;
    console.log(this.dbs.reward + "Points");

  }

  ngOnInit() {
    this.getReward();

    console.log()

    this.rKey = this.dbs.getKey();

    this.dbs.usersRewards.subscribe(res => {
      res.map(element => {
        console.log("1" + this.rKey);
        console.log("2" + element.key);
        if(this.rKey === element.key){

          this.show = true;
          this.Points = element.Points;
          this.Ratio = element.Points / element.Ratio;
          console.log("Rewards" + element.Points);

        }
      })
    })


   
  }

  // assign() {
  //   this.route.params.subscribe((parameters: Params) => {
  //     this.type = parameters.type;
  //     this.provider = parameters.provider;
  //   });
  // }

  getReward() {
    this.Reward.infoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.Reward.infoUrl);
  }
  back() {
    this.dbs.back();
  }
  safe( url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  get theme(): string {
    return this.themes.getTheme();
  }
  get Reward(){
    return this.routerListener.getReward;
  }

}

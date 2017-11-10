import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Rewards } from './../../dashboard/Rewards';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../../services/database/database.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent{
  src: SafeUrl;
  //Router Include
  type: string;
  provider: string;
  reward;
  constructor(public dbs: DatabaseService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    if (dbs.checkLoggedIn()) {
      //this.rewards = dbs.getRewardsArray();
     this.getReward();
    }


  }

  assign(){
  this.route.params.subscribe((parameters:Params)=>{
    this.type = parameters.type;
    this.provider = parameters.provider;
    console.log(this.type+ ' : ' + this.provider);
  });
  }
  getReward(){
    this.assign();
    this.reward = this.dbs.getReward(this.provider,this.type)
    this.reward.infoUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.reward.infoUrl);
    }
  back(){
    this.dbs.back();
  }

}

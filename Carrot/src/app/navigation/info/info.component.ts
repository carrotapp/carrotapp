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
  rewards: Rewards[] = [];
  src: SafeUrl;
  //Router Include
  type: string;
  username: string;
  provider: string;
  reward: Rewards;
  constructor(public dbs: DatabaseService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    if (dbs.checkLoggedIn()) {
      this.rewards = dbs.getRewardsArray();
    }


  }
 ngOnInit(){
  this.route.params.subscribe((params: Params) => {
    this.username = params.username;
    this.provider = params.provider;
    this.type = params.type;

    // assigning reward object
  if( this.type == 'view' ) {  
         this. getReward(this.dbs.getRewardsArray(), this.provider); 
         console.log(this.dbs.getRewardsArray())
  } else {  
          this. getReward(this.dbs.getRewardsArray(), this.provider);
          console.log(this.reward)
  }
  });
 }
  // retrieve reward
  getReward(list:Rewards[]  , provider:string):void{
    console.log('running');
    this.reward = this.dbs.getReward(list,provider);
    console.log(this.dbs.getReward(list,provider));
  }

}

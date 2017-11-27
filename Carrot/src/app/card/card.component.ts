import { Component, Input } from '@angular/core';
import { ThemesService } from '../services/themes.service';
import { HeaderComponent } from '../navigation/header/header.component';
import { Observable } from 'rxjs/Observable';
import { Rewards } from '../dashboard/Rewards';
import { DatabaseService } from '../services/database/database.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // item skeleton
  @Input('reward')
  reward;
  // surname
  @Input('username') username: string;
  // Type
  @Input('type') type: string;
  // hide
  @Input('isHidden')
  isHidden: boolean;
  constructor(public themes: ThemesService, protected databaseService: DatabaseService, ) {

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
    // const flag = this.databaseService.checkReward(this.reward.Key);
    // this.databaseService.rewardFlag = undefined;
   this.databaseService.checkReward(this.reward.Key);
   
   setTimeout(()=>{   
    console.log('timeout function');
      console.log(this.databaseService.rewardFlag);

    if (!this.databaseService.rewardFlag) {
      alert(' You already have ' + this.reward.Name + ' in your account! ');
    } else {
      this.routerListener.activeReward( this.reward );
      this.routerListener.activate();
    }
  
  }, 10);



  }
  moreinfo(){
    this.routerListener.activeReward( this.reward );
    this.databaseService.redirect('/'+this.databaseService.pathName(this.username)+'/'+this.databaseService.pathName(this.reward.Name)+'/'+this.type);
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

}

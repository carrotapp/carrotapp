import { Injectable } from '@angular/core';
import { DatabaseService } from './database/database.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Rewards } from '../dashboard/Rewards';

@Injectable()
export class RoutingListenerService {
    private username: string;
    private rewardName:string;
    private provider:string;
    private action:string;

    reward:Rewards = {
      Currency: 'cpts',
      Image: 'http://www.fetchrewards.com/assets/GiftBox.png',
      ProviderName: 'Carrot Rewards',
      Name: 'Carrot',
      Ratio: '2',
      Value: '1500',
      infoUrl: 'https://carrot-app.firebaseapp.com/login',
      summary: 'Carrot integrates everything for you so that you do not have too!!!',
      CardNumber: '1234567890',
      how: 'Like this',
      where: 'Over there',
      Email: 'carrot@mail.com',
      Password: 'c@rRoT123',
      Points: '21372',
      Key: 'CJHSakdh23qhHSdhb'
    
    };
    static isActivated :boolean= true;

  constructor( private router:Router, private activatedRoute:ActivatedRoute, private databaseService : DatabaseService ){
   // this.sync();
    RoutingListenerService.isActivated = true;
  }

sync():void{
    this.router.events.subscribe(()=>{
      console.log('Carrot application status log. Change to Link ' + this.router.url);
      // responsible for synchronity
            if( this.databaseService.checkLoggedIn()){
              try{
                this.subscribeParameter();
                  } catch(errors){
                 console.log('Status: Not Logged In Yet');
              }
      // no exceptions
            }
    });
}
    status():boolean{
      console.log('status: '+ ( this.provider !== undefined && this.username !== undefined ));
      return this.provider !== undefined && this.username !== undefined;
    }

    activeReward(reward:Rewards):void{
    this.reward = reward;
      console.log( reward);
    }
    activate():void{
  this.databaseService.checkReward(this.reward.Key);  
      RoutingListenerService.isActivated = !RoutingListenerService.isActivated;
    }

subscribeParameter(){
  this.activatedRoute.params.subscribe((parameters:Params)=>{
        this.username = parameters.username;
        this.rewardName = parameters.reward;
        this.provider = parameters.provider;
        this.action = parameters.type;
        console.log( 'Current:   ' + this.provider + ' ' + this.rewardName + ' ' + this.provider + ' ' + this.action );
  });
}
get getAcivity(){
  return RoutingListenerService.isActivated;
}
get getReward(){
  return this.reward;
}

}
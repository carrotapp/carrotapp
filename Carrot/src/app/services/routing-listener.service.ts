import { Injectable } from '@angular/core';
import { DatabaseService } from './database/database.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class RoutingListenerService {
    private username: string;
    private rewardName:string;
    private provider:string;
    private action:string;

  constructor( private router:Router, private activatedRoute:ActivatedRoute, private databaseService : DatabaseService ){
    this.sync();
  }

sync():void{
    this.router.events.subscribe((parameters:Params)=>{
      console.log('Carrot application status log. Change to Link ' + this.router.url);
      // responsible for synchronity
            if( this.databaseService.checkLoggedIn()){
              try{
                  this.username = parameters.username;
                  this.rewardName = parameters.reward;
                  this.provider = parameters.provider;
                  this.action = parameters.type;
                 } catch(errors){
                 console.log('Status: Not Logged In Yet');
              }
      // no exceptions
            }
    });
}
}

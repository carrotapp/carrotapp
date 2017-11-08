import { Injectable } from '@angular/core';
import { DatabaseService } from './database/database.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class RoutingListenerService {

  constructor( private router:Router, private activatedRoute:ActivatedRoute){
    this.sync();
  }

sync():void{
    this.router.events.subscribe(()=>{
      console.log('Syncing from Routing Listener')
    });
}
}

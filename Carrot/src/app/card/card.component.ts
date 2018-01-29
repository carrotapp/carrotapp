import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ThemesService } from '../services/themes.service';
import { HeaderComponent } from '../navigation/header/header.component';
import { Observable } from 'rxjs/Observable';
import { Rewards } from '../dashboard/Rewards';
import { DatabaseService } from '../services/database/database.service';
import { RoutingListenerService } from '../services/routing-listener.service';
import { MapService } from '../services/google/maps.service';
import { Search } from '../services/google/models/search.service';
import { GPSLocation } from '../services/google/models/gpslocation.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input('reward')
  reward;
  @Input('userData') userData;
  @Input('type') type: string;
  @Input('isHidden')
  isHidden: boolean;
  isOnAccount = false;
  isFlip: boolean; // Controls Styling
  currentLocation:GPSLocation;

  constructor(private routerListener: RoutingListenerService, public themes: ThemesService, protected mapService:MapService ,
     protected databaseService: DatabaseService, protected search:Search, protected router: Router) {
    // Constructor
  }

  ngOnInit() {
    if (this.userData.Points !== undefined) {
      this.isOnAccount = true;
      this.isFlip = true;
    }
  }

  get theme() {
    return this.themes.getTheme();
  }

  flip(): void {
    if (this.isHidden) {
      this.isFlip = !this.isFlip;
    }
  }

  addReward() {
    this.routerListener.activeReward(this.reward, this.isOnAccount);
    this.routerListener.activate();
  }

  moreInfo(key) {
    this.databaseService.setKey(key);
    this.routerListener.activeReward(this.reward, this.isOnAccount);
    this.router.navigate(['/main/info']);
  }

  goToAdd() {
    this.router.navigate(['/main/map']);
    // alert("Still under construction!")
  }

  onClick(){

   setTimeout(()=>{ this.search.search( this.reward.ProviderName , this.mapService.userLocation.location , 5000 , this.mapService.key  );
  },1000); 

  }

}

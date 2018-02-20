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
  currentLocation: GPSLocation;

  constructor(private routerListener: RoutingListenerService, public themes: ThemesService, protected mapService: MapService,
    protected databaseService: DatabaseService, protected search: Search, protected router: Router) {

    // this.search.search(this.reward.ProviderName, mapService.userLocation.location, 5000, mapService.key);
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

  activateReward(key) {
    this.databaseService.setKey(key);
    this.routerListener.activeReward(this.reward, this.isOnAccount);
  }
  move(location: string) {
    this.search.search(this.reward.ProviderName, this.mapService.userLocation.location, 5000, this.mapService.key);
    this.router.navigate([location]);
  }
  map(reward): void {
    this.routerListener.setReward(reward);
  }
  getLocation() {
    this.search.search(this.reward.ProviderName, this.mapService.userLocation.location, 5000, this.mapService.key);
  }


}

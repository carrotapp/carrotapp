import { RoutingListenerService } from './../services/routing-listener.service';
import { MapService } from './../services/google/maps.service';
import { Router } from '@angular/router';
import { DatabaseService } from './../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { Rewards } from '../dashboard/Rewards';
import { Search } from '../services/google/models/search.service';

@Component({
  selector: 'coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(public db: DatabaseService, protected router: Router, protected search: Search, protected mapService: MapService, protected routerListener: RoutingListenerService) { }

  ngOnInit() {
  }

  move(location: string, reward) {
    this.search.search(reward.ProviderName, this.mapService.userLocation.location, 5000, this.mapService.key);
    this.router.navigate([location]);
  }
  map(reward): void {
    this.routerListener.setReward(reward);
  }

}

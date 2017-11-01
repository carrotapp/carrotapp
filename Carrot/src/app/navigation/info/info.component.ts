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
export class InfoComponent implements OnInit {
  rewards: Rewards[] = [];
  provider: string;
  src: SafeUrl;
  index: number;
  constructor(public dbs: DatabaseService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    if (dbs.checkLoggedIn()) {
      this.rewards = dbs.getRewardsArray();
      this.route.params.subscribe((params: Params) => {
        this.index = params.index;
      });
      console.table(this.rewards[this.index]);
      // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.rewards[this.index].infoUrl);
    }
  }

  ngOnInit() {
    
  }

}

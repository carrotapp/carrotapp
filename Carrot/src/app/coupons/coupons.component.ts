import { Router } from '@angular/router';
import { DatabaseService } from './../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { Rewards } from '../dashboard/Rewards';

@Component({
  selector: 'coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  constructor(protected db: DatabaseService, protected router: Router) { }

  ngOnInit() {
  }

}

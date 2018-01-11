import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-time-card',
  templateUrl: './first-time-card.component.html',
  styleUrls: ['./first-time-card.component.css']
})
export class FirstTimeCardComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  goToAdd(){
    this.router.navigate(['main/rewards']);
  }

}

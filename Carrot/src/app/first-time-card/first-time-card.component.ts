import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../services/themes.service';

@Component({
  selector: 'app-first-time-card',
  templateUrl: './first-time-card.component.html',
  styleUrls: ['./first-time-card.component.css']
})
export class FirstTimeCardComponent implements OnInit {

  constructor(public themes: ThemesService, protected router: Router) { }

  ngOnInit() {
  }

  goToAdd(){
    this.router.navigate(['main/rewards']);
  }

  get theme(): string {
    return this.themes.getTheme();
  }
}

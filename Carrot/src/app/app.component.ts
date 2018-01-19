import { DatabaseService } from './services/database/database.service';
import { Component } from '@angular/core';
import { ThemesService } from './services/themes.service';
import { OnInit } from '@angular/core';
import { setTimeout } from 'timers';
import { AngularFireAuth } from 'angularfire2/auth';
import { MapService } from './services/google/maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userTheme;

  constructor(public themes: ThemesService, map:MapService) {
map.userLocation();
  }

  get theme(): string {
    return this.themes.getTheme();
  }

  ngOnInit() {
    
  }
}

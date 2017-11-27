import { DatabaseService } from './services/database/database.service';
import { Component } from '@angular/core';
import { ThemesService } from './services/themes.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public themes: ThemesService, protected ds: DatabaseService) { }
  get theme(): string {
    return this.themes.getTheme();
  }
  ngOnInit() {
    console.log(this.ds.getCurrentUser());
  }
}

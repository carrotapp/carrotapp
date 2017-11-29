import { setTimeout } from 'timers';
import { Component } from '@angular/core';
import { ThemesService } from '../../services/themes.service';
import { DatabaseService } from '../../services/database/database.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public themes: ThemesService, protected ds: DatabaseService) {

  }

  ngOnInit() {
    // this.themes.setTheme(this.ds.theme);
  }
  get theme(): string {
    return this.themes.getTheme();
  }
}

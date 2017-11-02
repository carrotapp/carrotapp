import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isColor: boolean;
  constructor(private ds: DatabaseService, public toolbarObj: NavigationTogglesService, public themes: ThemesService) { }

  ngOnInit() {
  }
  // toggling
  toolbar(): void {
    this.toolbarObj.toolbar_toggle();
  }
  paints(): void {
    this.isColor = !this.isColor;
  }
  log(): void {
    console.log('clicked');
  }

  // Retrieving State
  get state() {
    return NavigationTogglesService.toolbartoggle;
  }
  // theme
  get theme(): string {
    return this.themes.getTheme();
  }
  setTheme(theme: string): void {
    this.themes.setTheme(theme);
  }

  // logout(){
  //   this.ds.logout();
  // }

}

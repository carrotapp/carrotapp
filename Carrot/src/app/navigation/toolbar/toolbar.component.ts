import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';
import { ThemesService } from '../../services/themes.service';
import { DatabaseService } from '../../services/database/database.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isColor: boolean;
  username: string;
  path_username;
  // tslint:disable-next-line:max-line-length
  constructor(public toolbarObj: NavigationTogglesService, public themes: ThemesService, protected ds: DatabaseService, protected router: Router) {
    this.username = ds.getName();
    this.path_username = ds.pathName(this.username);
  }
  // getter
  get pathName() {
    return this.path_username;
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

  goToProfile() {
    this.router.navigate(['/' + this.ds.pathName(this.ds.getName()) + '/profile']);
  }
}

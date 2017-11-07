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
  username:string;
  path_username;
  constructor(public toolbarObj: NavigationTogglesService, public themes: ThemesService,private afAuth: AngularFireAuth) {
    this.username = this.afAuth.auth.currentUser.displayName
    this.path_username = this.toLowerPath(this.afAuth.auth.currentUser.displayName);
   }
//to lower
toLowerPath(name:string):string{
  return name.toLowerCase().replace(/ /g,'.');
}
//getter
get pathName(){
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
}
import { ProfileComponent } from './../../profile/profile.component';
import { Router } from '@angular/router';
import { DatabaseService } from './../../services/database/database.service';
import { Component } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  login: boolean;
  avatar: string;

  // tslint:disable-next-line:max-line-length
  constructor(protected ds: DatabaseService, public navtoggle: NavigationTogglesService, public themes: ThemesService, public router: Router) {

    this.avatar = ds.getAvatar();

    // console.log(this.router.url.toString());

    if (this.router.url.toString() === '/login' || this.router.url.toString() === '/register' || this.router.url.toString() === '/forgotPassword' || this.router.url.toString() === '/confirmPassword') {
      this.login = true;
    } else {
      this.login = false;
    }

  }


  get theme(): string {
    return this.themes.getTheme();
  }

  sidebar_toggle(): void {
    this.navtoggle.sidebar_toggle();
  }
  toolbar(): void {
    this.navtoggle.toolbar_toggle();
  }

  toMain() {
    if(this.ds.getCurrentUser()) {
      this.router.navigate(['/' + this.ds.pathName(this.ds.getName()) + '/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
}

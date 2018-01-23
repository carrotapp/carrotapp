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

  // tslint:disable-next-line:max-line-length
  constructor(public ds: DatabaseService, public navtoggle: NavigationTogglesService, public themes: ThemesService, public router: Router) {
    // tslint:disable-next-line:max-line-length
    if (this.router.url.includes('/login') || this.router.url.includes('/register') || this.router.url.includes('/forgotPassword') || this.router.url.includes('/confirmPassword')) {
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

  back() {
    this.router.navigate(['/main/dashboard']);
  }
}

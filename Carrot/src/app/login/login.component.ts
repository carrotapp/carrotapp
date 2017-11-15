import { DatabaseService } from '../services/database/database.service';
import { element } from 'protractor';
import { Component } from '@angular/core';
import { ThemesService } from '../services/themes.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(public databaseService: DatabaseService, private themes : ThemesService) {
  }

  signIn() {
    this.databaseService.signIn(this.email, this.password );
  }

  googlePopup() {
    this.databaseService.googlePopup();
  }
  get theme(): string {
    return this.themes.getTheme();
  }
}

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
  icon= 'fa fa-eye';
  typeInput= 'password';



  constructor(public databaseService: DatabaseService, private themes: ThemesService) {

  }

  signIn() {
    this.databaseService.signIn(this.email, this.password );
  }

  googlePopup() {
    this.databaseService.googlePopup();
  }

 showPassword() {
   if (this.typeInput === 'password') {
     this.typeInput = 'text';
     this.icon = 'fa fa-eye-slash';
   }else {
     this.typeInput = 'password';
     this.icon = 'fa fa-eye';
   }
 }
}

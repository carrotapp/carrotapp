import { DatabaseService } from './../services/database/database.service';
import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  email = '';
  password = '';
  username = '';
  icon = 'fa fa-eye';
  typeInput = 'password';

  constructor(private databaseService: DatabaseService) { }

  googlePopup() {
    this.databaseService.googlePopup();
  }

  register() {
    if (this.email !== '' && this.email !== '' && this.password !== '' && this.username !== '') {
      if (this.password.length >= 8) {
        this.databaseService.signUp(this.email, this.password, this.username);
      } else {
        alert('Error: Minimum password length is 8');
        this.password = '';
      }
    } else {
      alert('Fill out all the fields.');
    }
  }

  showPassword() {
    if (this.typeInput === 'password') {
      this.typeInput = 'text';
      this.icon = 'fa fa-eye-slash';
    } else {
      this.typeInput = 'password';
      this.icon = 'fa fa-eye';
    }
  }
}

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
  // confirmPassword = '';
  username = '';

  constructor(private databaseService: DatabaseService) { }

  register() {
    if (this.email !== '' && this.email !== '' && this.password !== '' /*&& this.confirmPassword !== ''*/ && this.username !== '') {
      if (this.password.length >= 8) {
        // if (this.password !== this.confirmPassword) {
        //   alert('Password do not match');
        // } else {
          this.databaseService.signUp(this.email, this.password, this.username);
        // }

      } else {
        alert('Error: Minimum password length is 8');
        this.password = '';
      }

    } else {
      alert('Fill out all the fields.');
    }
  }
}

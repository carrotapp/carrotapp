import { DatabaseService } from './../services/database/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  email: string;
  password = '';
  theme;

  constructor(protected ds: DatabaseService) {
    this.name = this.ds.getName();
    this.email = this.ds.getEmail();
    this.theme = this.ds.getTheme();
  }

  ngOnInit() {
    // this.theme = this.ds.theme;
    console.log(this.name + ', ' + this.email + ', ' + this.theme);
  }

  save() {
    if (this.name !== this.ds.getName()) {
      this.ds.setName(this.name);
      console.log('Updated: name');
    }
    if (this.email !== this.ds.getEmail()) {
      this.ds.setEmail(this.email);
      console.log('Updated: email');
    }
    if (this.password !== '') {
      this.ds.resetPassword(this.password);
      console.log('Updated: password');
    }
    if (this.ds.getTheme() !== this.theme) {
      this.ds.updateTheme(this.theme);
      console.log('Updated: theme');
    }
  }

}

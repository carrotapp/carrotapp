import { DatabaseService } from './../services/database/database.service';
import { Component, OnInit, Input } from '@angular/core';
import { ThemesService } from '../services/themes.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  email: string;
  password = '';
  theme;
  @Input() img;

  constructor(public ds: DatabaseService, protected themeServ : ThemesService) {
    this.name = ds.getName();
    this.email = ds.getEmail();
    this.theme = ds.getTheme();
  }

  ngOnInit() {
  }

  save() {
    if (this.name !== this.ds.getName()) {
      this.ds.setName(this.name);
      // console.log('Updated: name');
    }
    if (this.email !== this.ds.getEmail()) {
      this.ds.setEmail(this.email);
      // console.log('Updated: email');
    }
    if (this.password !== '') {
      this.ds.resetPassword(this.ds.getEmail());
      // console.log('Updated: password');
    }
    if (this.ds.getTheme() !== this.theme) {
      this.ds.updateTheme(this.theme);
      // console.log('Updated: theme');
      this.themeServ.setTheme( this.ds.getTheme());
    }
  }

}

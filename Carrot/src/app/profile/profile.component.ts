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

  constructor(public ds: DatabaseService, protected themeServ: ThemesService) {
    this.name = ds.getName();
    this.email = ds.getEmail();
    this.theme = ds.getTheme();
  }

  ngOnInit() {
  }

  save() {
    if (this.name !== this.ds.getName()) {
      this.ds.setName(this.name);
    }
    if (this.email !== this.ds.getEmail()) {
      this.ds.setEmail(this.email);
    }
    if (this.password !== '') {
      this.ds.newReset(this.ds.getEmail());
    }
    if (this.ds.getTheme() !== this.theme) {
      this.ds.updateTheme(this.theme);
      this.themeServ.setTheme(this.ds.getTheme());
    }
  }

}

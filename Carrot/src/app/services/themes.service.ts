import { DatabaseService } from './database/database.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemesService {
  // Global Static Variables
  static theme: string; // this is the theme that will be broadcasted
  themes: string[]; // list of available themes

  constructor() {
    this.themes = ['default', 'dark', 'blind', 'fun'];
    ThemesService.theme = 'default';
    // if (this.isThemeExists(ds.theme)) {
    //   ThemesService.theme = ds.theme;
    // } else {
    //   ThemesService.theme = this.themes[0];
    // }
    // setTimeout(() => {
    //   console.log(ThemesService.theme);
    //   console.log(ds.theme);
    // }, 1000);
  }

  setTheme(theme): void {
    if (this.isThemeExists(theme)) {
      ThemesService.theme = theme;
    } else {
      ThemesService.theme = this.themes[0];
    }
  }

  getTheme(): string {
    return ThemesService.theme;
  }

  isThemeExists(theme: string) {
    return this.themes.includes(theme);
  }

}

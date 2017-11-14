import { DatabaseService } from './database/database.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemesService {
  // Global Static Variables
  static theme: string; // this is the theme that will be broadcasted
  themes: string[]; // list of available themes

  constructor(protected ds: DatabaseService) {
    this.themes = ['default', 'dark', 'blind', 'fun'];
    ThemesService.theme = ds.getTheme();
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

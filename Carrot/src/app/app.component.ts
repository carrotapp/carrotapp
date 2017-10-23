import { Component } from '@angular/core';
import { ThemesService } from './services/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public themes :ThemesService ){}
  get theme():string{
    console.log(this.themes.getTheme());
    return this.themes.getTheme();
  }
}

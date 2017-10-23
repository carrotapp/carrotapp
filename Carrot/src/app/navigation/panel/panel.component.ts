import { Component } from '@angular/core';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  constructor(public themes: ThemesService) { }

  get theme():string{
    return this.themes.getTheme();
  }
}

import { Component } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';
import { ThemesService } from '../../services/themes.service';
@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})


export class MainPanelComponent {
  
  constructor(public themes: ThemesService) {  }

  get theme():string{
        return this.themes.getTheme();
  }

 
}

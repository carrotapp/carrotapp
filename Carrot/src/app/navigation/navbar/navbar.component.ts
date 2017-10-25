import { Component } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  
  constructor( public navtoggle : NavigationTogglesService,public themes: ThemesService ) { 
  }
    
  
  get theme():string{
      return this.themes.getTheme();
    }
  
  sidebar_toggle():void {
    this.navtoggle.sidebar_toggle();
   }
  toolbar() : void {
    this.navtoggle.toolbar_toggle();
  }
}

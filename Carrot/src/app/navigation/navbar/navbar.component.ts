import { Component, OnInit } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor( public navtoggle : NavigationTogglesService ) { 
  }
  sidebar_toggle():void {
    this.navtoggle.sidebar_toggle();
   }
  toolbar() : void {
    this.navtoggle.toolbar_toggle();
  }
  ngOnInit() {
  }

}

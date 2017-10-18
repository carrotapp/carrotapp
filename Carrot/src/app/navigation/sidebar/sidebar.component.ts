import { Component, OnInit } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  // The purpose of this import is to access the none static methods in this service
  constructor( public navtoggle : NavigationTogglesService ) {  
    }
  // Reaction of the sidebar due to hovering
    sidebarhover(state):void{
      NavigationTogglesService.ShowSideBar = state;
    }

 // This method is for external buttons that wish to change the state of the sidebar toggle
 sidebar():void {
  this.navtoggle.sidebar_toggle();  
 }
  ngOnInit() {
  }
   // Get the State of the sidebar 
  get state() {
    return NavigationTogglesService.ShowSideBar;
  }
}

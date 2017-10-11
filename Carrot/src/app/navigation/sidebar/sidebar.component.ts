import { Component, OnInit } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor( public navtoggle : NavigationTogglesService ) { 
    }
 sidebar_toggle():void {
  this.navtoggle.sidebar_toggle();  
 }
  ngOnInit() {
  }

}

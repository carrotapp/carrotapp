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
    sidebarhover_In():void{
      if(NavigationTogglesService.ShowSideBar != 'show') this.sidebar_toggle();
    }
    sidebarhover_Out():void{
      if(NavigationTogglesService.ShowSideBar != 'default') this.sidebar_toggle();
    }

 sidebar_toggle():void {
  this.navtoggle.sidebar_toggle();  
 }
  ngOnInit() {
  }
  get getShowSideBar() {
    return NavigationTogglesService.ShowSideBar;
  }
}

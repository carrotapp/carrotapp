import { Component, OnInit } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ShowSideBar:boolean = false;

  constructor( public navtoggle : NavigationTogglesService ) { 
    this.ShowSideBar = NavigationTogglesService.ShowSideBar;
    console.log(this.ShowSideBar);
  }
  sidebar_toggle():void {
    this.navtoggle.sidebar_toggle();
   }
   get getShowSideBar() {
    return NavigationTogglesService.ShowSideBar;
  }
  ngOnInit() {
  }

}

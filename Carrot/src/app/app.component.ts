import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  showSideBar:boolean;
  sidebar_toggle(){
    this.showSideBar = !this.showSideBar;
  }
  constructor() { 
    this.showSideBar=true;
  }
}

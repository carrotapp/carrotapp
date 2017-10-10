import { Component, OnInit,Injectable } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})

export class MainPanelComponent implements OnInit {
  showSideBar:boolean;
  sidebar_toggle(){
    this.showSideBar = !this.showSideBar;
  }
  constructor() { 
    this.showSideBar=true;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor( public toolbarObj : NavigationTogglesService ) { }

  ngOnInit() {
  }
 //toggling 
 toolbar():void {
  this.toolbarObj.toolbar_toggle();  
 }
  // Retrieving State
  get state() {
    return NavigationTogglesService.toolbartoggle;
  }

}

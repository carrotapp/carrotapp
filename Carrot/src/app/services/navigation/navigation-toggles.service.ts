import { Injectable } from '@angular/core';
/*
  @Author: Sixolile Mtengwana
*/
@Injectable()
export class NavigationTogglesService {
   static ShowSideBar:boolean = false;
   static togglesidebarstyleClass: String;
  //Start of Constructor
   constructor() { 
    NavigationTogglesService.ShowSideBar = false;
    NavigationTogglesService.togglesidebarstyleClass = "hidden";
  }
  sidebar_toggle():void{
    NavigationTogglesService.ShowSideBar = !NavigationTogglesService.ShowSideBar;
  }
}

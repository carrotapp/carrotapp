import { Injectable } from '@angular/core';
@Injectable()
export class NavigationTogglesService {
   static ShowSideBar:string;
   static toolbartoggle: String;
  //Start of Constructor
   constructor() { 
    NavigationTogglesService.ShowSideBar = 'default';
    NavigationTogglesService.toolbartoggle = "default";
  }

  // Toggles
  //Sidebar
  sidebar_toggle():void{
    if(NavigationTogglesService.ShowSideBar === 'default')
    NavigationTogglesService.ShowSideBar = 'show';
  
    else NavigationTogglesService.ShowSideBar = 'default';
    console.log(NavigationTogglesService.ShowSideBar);
  }
  // toolbar
  toolbar_toggle():void{
    if(NavigationTogglesService.toolbartoggle === 'default')
    NavigationTogglesService.toolbartoggle = 'show';
  
    else NavigationTogglesService.toolbartoggle = 'default';
    console.log(NavigationTogglesService.toolbartoggle);
  }
}

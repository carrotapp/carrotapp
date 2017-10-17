import { Injectable } from '@angular/core';
/*
  @Author: Sixolile Mtengwana
*/
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
  sidebar_toggle():void{
    if(NavigationTogglesService.ShowSideBar === 'default')
    NavigationTogglesService.ShowSideBar = 'show';
  
    else NavigationTogglesService.ShowSideBar = 'default';
    console.log(NavigationTogglesService.ShowSideBar);
  }
}

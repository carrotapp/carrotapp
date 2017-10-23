import { Injectable } from '@angular/core';

@Injectable()
export class ThemesService {
  // Global Static Variables
  static theme:string; // this is the theme that will be broadcasted
  themes:string[]; // list of available themes

  constructor() { 
   this.themes =['default','dark', 'blind','fun'];
   ThemesService.theme = this.themes[0];
  }

  setTheme(theme):void{
    if(this.isThemeExists(theme)){
      ThemesService.theme = theme;  
      console.log(ThemesService.theme)  
    } else{
      alert('NONONO');
    }
  }

   getTheme():string{
    return ThemesService.theme;
  }
   
   isThemeExists(theme:string){ 
   return  this.themes.includes(theme);
  }

}
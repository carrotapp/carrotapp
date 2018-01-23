import { Injectable } from '@angular/core';

@Injectable()
export class NavigationTogglesService {
  static ShowSideBar: string;
  static toolbartoggle: String;
  static modal: boolean;
  // Start of Constructor
  constructor() {
    NavigationTogglesService.ShowSideBar = 'default';
    NavigationTogglesService.toolbartoggle = 'default';
    NavigationTogglesService.modal = false;
  }

  // Toggles
  // Sidebar
  sidebar_toggle(): void {
    if (NavigationTogglesService.ShowSideBar === 'default') {
      NavigationTogglesService.ShowSideBar = 'show';
    } else {
      NavigationTogglesService.ShowSideBar = 'default';

    }
  }

  modal() {
    NavigationTogglesService.modal = !NavigationTogglesService.modal;
  }
  // toolbar
  toolbar_toggle(): void {
    if (NavigationTogglesService.toolbartoggle === 'default') {
      NavigationTogglesService.toolbartoggle = 'show';
    } else {
      NavigationTogglesService.toolbartoggle = 'default';
    }
  }
}



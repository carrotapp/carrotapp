import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DatabaseService } from '../../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { NavigationTogglesService } from '../../services/navigation/navigation-toggles.service';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  src: SafeUrl;

  // The purpose of this import is to access the none static methods in this service
  // tslint:disable-next-line:max-line-length
  constructor(public navtoggle: NavigationTogglesService, public themes: ThemesService, public ds: DatabaseService, private sanitizer: DomSanitizer) {
  }
  // Reaction of the sidebar due to hovering
  sidebarhover(state): void {
    NavigationTogglesService.ShowSideBar = state;
  }

  // This method is for external buttons that wish to change the state of the sidebar toggle
  sidebar(): void {
    this.navtoggle.sidebar_toggle();
  }

  // Get the State of the sidebar
  get state() {
    return NavigationTogglesService.ShowSideBar;
  }
  // theme
  get theme(): string {
    return this.themes.getTheme();
  }

  ngOnInit() {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.ds.getAvatar());
  }

}

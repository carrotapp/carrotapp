import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabaseService } from './services/database/database.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { RewardsComponent } from './rewards/rewards.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { PanelComponent } from './navigation/panel/panel.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { MainPanelComponent } from './navigation/main-panel/main-panel.component';
import { FooterComponent } from './navigation/footer/footer.component';
// service imports
import { NavigationTogglesService } from './services/navigation/navigation-toggles.service';
import { InfoComponent } from './navigation/info/info.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDUlfMoY9Aq0nOGnZt_ovhRDaUtOJUnZ04',
  authDomain: 'carrot-app.firebaseapp.com',
  databaseURL: 'https://carrot-app.firebaseio.com',
  projectId: 'carrot-app',
  storageBucket: 'carrot-app.appspot.com',
  messagingSenderId: '132005725857'
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    CustomButtonComponent,
    RewardsComponent,
    NotFoundComponent,
    NavbarComponent,
    PanelComponent,
    SidebarComponent,
    MainPanelComponent,
    FooterComponent,
    InfoComponent,
    DashboardComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [DatabaseService, NavigationTogglesService], // Dependancy Injection
  bootstrap: [AppComponent]
})
export class AppModule { }

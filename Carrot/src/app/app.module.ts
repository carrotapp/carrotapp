import { MetaLoader, MetaStaticLoader, PageTitlePositioning, MetaModule } from '@ngx-meta/core';
import { AuthGuard } from './services/guards/authGuard.service';
import { RoutingListenerService } from './services/routing-listener.service';
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
import { ThemesService} from './services/themes.service';
import { InfoComponent } from './navigation/info/info.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { BackComponent } from './navigation/back/back.component';
import { RewardsCredentialsComponent } from './rewardsCredentials/rewardsCredentials.component';
import { HeaderComponent } from './navigation/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { FirstTimeCardComponent } from './first-time-card/first-time-card.component';
import { CouponsComponent } from './coupons/coupons.component';
import { DatePipe } from '@angular/common';
import { MapsComponent } from './maps/maps.component';
import { MapService } from './services/google/maps.service';
import { HttpModule } from '@angular/http';
import { LocationService } from './services/google/models/location.service';
import { GPSLocation } from './services/google/models/gpslocation.service';

import { AgmCoreModule } from '@agm/core';

export const firebaseConfig = {
  apiKey: 'AIzaSyDUlfMoY9Aq0nOGnZt_ovhRDaUtOJUnZ04',
  authDomain: 'carrot-app.firebaseapp.com',
  databaseURL: 'https://carrot-app.firebaseio.com',
  projectId: 'carrot-app',
  storageBucket: 'carrot-app.appspot.com',
  messagingSenderId: '132005725857'
};

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'Carrot',
    defaults: {
      author: 'Ernst Kaese, Zahirah Ismail, Lihle Mdikili, Sixolile Mtengwana',
      title: 'Carrot'
    }
  });
}

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
    ToolbarComponent,
    CardComponent,
    BackComponent,
    HeaderComponent,
    RewardsCredentialsComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    ConfirmPasswordComponent,
    FirstTimeCardComponent,
    MapsComponent,
    CouponsComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAz-CK7i3m_BEBkE6KRysWbwiqbjHUyFPQ'
    })
  ],

  providers: [DatabaseService, NavigationTogglesService, ThemesService, MapService, LocationService, GPSLocation, RoutingListenerService, AuthGuard, DatePipe], // Dependancy Injection
  bootstrap: [AppComponent]
})
export class AppModule { }

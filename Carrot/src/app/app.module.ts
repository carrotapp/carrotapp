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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    }),
  ],
  providers: [DatabaseService, NavigationTogglesService, ThemesService, RoutingListenerService, AuthGuard], // Dependancy Injection
  bootstrap: [AppComponent]
})
export class AppModule { }

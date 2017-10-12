import { RegisterService } from './register.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomTextfieldComponent } from './custom-textfield/custom-textfield.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { PanelComponent } from './navigation/panel/panel.component';
import { MainPanelComponent } from './navigation/main-panel/main-panel.component';
//Service Import
import { NavigationTogglesService } from './services/navigation/navigation-toggles.service';
import { MoreComponent } from './more/more.component';


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
    CustomTextfieldComponent,
    SidebarComponent,
    NavbarComponent,
    PanelComponent,
    MainPanelComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ AngularFireAuth , AngularFireDatabaseModule , NavigationTogglesService ], // Injected The Service
  bootstrap: [AppComponent]
})
export class AppModule { }

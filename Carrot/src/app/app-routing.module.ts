import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PanelComponent } from './navigation/panel/panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'main', component: PanelComponent},
    { path: 'main/more', component: MoreComponent}, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

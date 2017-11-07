import { RewardsCredentialsComponent } from './rewardsCredentials/rewardsCredentials.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RewardsComponent } from './rewards/rewards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './navigation/panel/panel.component';
import { HeaderComponent } from './navigation/header/header.component';
import { InfoComponent } from './navigation/info/info.component';
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // This is the new router outlet outline... In  progress
         { path: 'login', component: LoginComponent }, // Parent of the Parent Hierachy
            { path: 'register', component: RegistrationComponent }, // Parent of the Parent Hierachy
            { path: ':username', component: PanelComponent , children: [
                { path: 'rewards', component: RewardsComponent},
                    { path: 'dashboard', component: DashboardComponent},
                          { path: ':provider/:type', component: InfoComponent},
            ]},//End of Multiple Router Implementation
    { path: 'header', component: HeaderComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

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
            { path: ':name', component: PanelComponent , children: [
                // { path: '', redirectTo: '//hello', pathMatch: 'full' }, 
                { path: 'rewards', component: RewardsComponent},
                    { path: 'dashboard', component: DashboardComponent},
                    { path: 'details/:provider/:index', component: InfoComponent},
                  ]},

    // { path: 'Info', component: InfoComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegistrationComponent },
    // { path: 'rewards', component: RewardsComponent },
    // { path: 'main', component: PanelComponent , children: [
    //     { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' },
    //     { path: 'dashboard', component: DashboardComponent},
    //     { path: 'rewards', component: RewardsComponent},
    //     { path: 'info/:provider/:index', component: InfoComponent},
    //   ]},
    // { path: 'header/:h1/:h2/:title', component: HeaderComponent},
    // { path: 'dashboard', component: DashboardComponent},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

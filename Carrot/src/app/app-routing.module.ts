import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RewardsComponent } from './rewards/rewards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './navigation/panel/panel.component';
import { InfoComponent } from './navigation/info/info.component';

import { CardComponent } from './card/card.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'Info', component: InfoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'rewards', component: RewardsComponent },
    { path: 'main', component: PanelComponent , children: [
        { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent},
        { path: 'rewards', component: RewardsComponent},
        { path: 'info/:provider/:index', component: InfoComponent},
      ]},
    { path: 'card', component: CardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ProfileComponent } from './profile/profile.component';
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
import { AuthGuard } from './services/guards/authGuard.service';

const routes: Routes = [
    { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' },
    // This is the new router outlet outline... In  progress
    { path: 'login', component: LoginComponent }, // Parent of the Parent Hierachy
    { path: 'forgotPassword', component: ForgotPasswordComponent },
    { path: 'confirmPassword', component: ConfirmPasswordComponent },
    { path: 'register', component: RegistrationComponent }, // Parent of the Parent Hierachy
    {
        path: 'main', component: PanelComponent, canActivate: [AuthGuard], children: [
            { path: 'rewards', component: RewardsComponent, canActivate: [AuthGuard] },
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'credentials', component: RewardsCredentialsComponent, canActivate: [AuthGuard] },
            // { path: 'add/:reward', component: RewardsCredentialsComponent },
            { path: 'info', component: InfoComponent, canActivate: [AuthGuard] },
            // { path: 'add/:', component: ConfirmPasswordComponent },
            { path: '404', component: NotFoundComponent },
            { path: '**', redirectTo: '/404' },
        ]
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

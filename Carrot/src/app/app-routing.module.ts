import { MapsComponent } from './maps/maps.component';
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
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
    {
        path: '',
        canActivateChild: [MetaGuard],
        children: [
            { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' },
            // This is the new router outlet outline... In  progress
            { path: 'login', component: LoginComponent, data: { meta: { title: 'Login' } } }, // Parent of the Parent Hierachy
            { path: 'forgotPassword', component: ForgotPasswordComponent, data: { meta: { title: 'Forgot Password' } } },
            { path: 'confirmPassword', component: ConfirmPasswordComponent, data: { meta: { title: 'Confirm Password' } } },
            { path: 'register', component: RegistrationComponent, data: { meta: { title: 'Register' } } }, // Parent of the Parent Hierachy
            {
                path: 'main', component: PanelComponent, canActivate: [AuthGuard], children: [
                    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { meta: { title: 'Dashboard' } } },
                    { path: 'rewards', component: RewardsComponent, canActivate: [AuthGuard], data: { meta: { title: 'Add Rewards' } } },
                    // { path: 'credentials', component: RewardsCredentialsComponent, canActivate: [AuthGuard] },
                    // { path: 'add/:reward', component: RewardsCredentialsComponent },
                    { path: 'info', component: InfoComponent, canActivate: [AuthGuard], data: { meta: { title: 'More Info' } } },
                    // { path: 'add/:', component: ConfirmPasswordComponent },
                    { path: '404', component: NotFoundComponent, data: { meta: { title: 'Page Not Found' } } },
                    { path: 'location', component: MapsComponent, data: { meta: { title: 'Location' } } },
                    { path: '**', redirectTo: '/404' },
                ]
            },
            { path: '404', component: NotFoundComponent, data: { meta: { title: 'Page Not Found' } } },
            { path: '**', redirectTo: '/404' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

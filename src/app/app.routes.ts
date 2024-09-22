import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SosPageComponent } from './components/sos-page/sos-page.component';
import { UserDashboardComponent } from './components/user-components/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'user-dashboard', component: UserDashboardComponent },
    { path: 'sos-page', component: SosPageComponent },
];

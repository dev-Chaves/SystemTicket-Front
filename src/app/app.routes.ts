import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/registration/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'login', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin/dashboard', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent}
];

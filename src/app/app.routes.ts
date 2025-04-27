import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/registration/register.component';

export const routes: Routes = [
    {path: 'login', component: HomeComponent},
    {path: 'register', component: RegisterComponent}
];

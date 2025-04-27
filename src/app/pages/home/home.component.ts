import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/sem-loggar/header/header.component";
import { LoginComponent } from '../../components/sem-loggar/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, LoginComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
} )
export class HomeComponent {

}

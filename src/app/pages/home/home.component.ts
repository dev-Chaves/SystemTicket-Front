import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/sem-loggar/header/header.component";
import { LoginComponent } from '../../components/sem-loggar/login/login.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

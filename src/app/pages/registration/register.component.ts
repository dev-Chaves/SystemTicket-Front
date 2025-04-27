import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/sem-loggar/header/header.component';
import { RegisterComponentSemLoggar } from '../../components/sem-loggar/register/register.component';

@Component({
  selector: 'app-register',
  imports: [HeaderComponent, RegisterComponentSemLoggar],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}

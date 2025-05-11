import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-sem-loggar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponentSemLoggar {
  registerForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      usersName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      token: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { usersName, password, token } = this.registerForm.value;
      console.log('Register attempt:', { usersName, password, token });
      
      this.authService.register(usersName, password, token).subscribe({
        next: () => {
          console.log('Registration successful');
          this.successMessage = 'Registro realizado com sucesso! Redirecionando para o login...';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: (error) => {
          console.error('Registration error:', error);
          this.errorMessage = error.error.message || 'Erro ao realizar registro. Tente novamente.';
        }
      });
    } else {
      console.log('Form validation errors:', this.registerForm.errors);
    }
  }
}

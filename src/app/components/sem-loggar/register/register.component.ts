import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-sem-loggar',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponentSemLoggar {
  
  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder){

    this.registerForm = this.formBuilder.group({
      usersName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      token: ['', [Validators.required, Validators.minLength(3)]]
    })

  }


  onSubmit(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    }
  }

}

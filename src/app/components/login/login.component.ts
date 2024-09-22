import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // email: string = '';
  // password: string = '';

  // constructor(private router: Router) {}

  // onLogin() {
  //   console.log('Logging in with:', this.email, this.password);
  //   this.router.navigate(['/user-dashboard']);
  // }

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialize the form
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onLogin() {
    // Reset error message
    this.errorMessage = '';

    // Check if the form is valid
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    // Retrieve form values
    const { email, password } = this.loginForm.value;
    // C:\Users\285486\Desktop\frontend-project\frontend\src\app\components\user-components\user-dashboard
    // Implement your login logic here
    console.log('Logging in with:', email, password);
    this.router.navigate(['/user-dashboard'])

    // Redirect or handle post-login logic
    // this.router.navigate(['/home']); // Uncomment to redirect after login
  }

  // Helper methods to get form controls
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}

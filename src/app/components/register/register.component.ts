import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  address: string = '';
  gender: string = '';
  age: number | null = null;
  emergencyContact: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Reset error message
    this.errorMessage = '';

    // Validate input fields
    if (!this.name || !this.email || !this.password || 
        !this.phone || !this.address || !this.gender || 
        this.age === null || !this.emergencyContact) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    if (this.age < 18 || this.age > 120) {
      this.errorMessage = 'Age must be between 18 and 120.';
      return;
    }

    // Create a user object matching the Person class
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      address: this.address,
      gender: this.gender,
      age: this.age,
      emergencyContact: this.emergencyContact
    };

    // Implement your registration logic here
    console.log('Registering user:', user);
    
    // Redirect or handle post-registration logic
    this.router.navigate(['/login']); // Uncomment to redirect after registration
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}

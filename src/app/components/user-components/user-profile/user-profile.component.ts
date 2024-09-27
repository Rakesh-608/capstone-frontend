import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import for common directives like *ngIf and *ngFor
import { Person } from '../../../models/person';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,UserNavbarComponent,FormsModule], // Import necessary Angular modules
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: Person;

  constructor() {
    // Initialize user with example data or fetch from a service
    this.user = {
      id: '1', // Optional
      name: 'John Doe',
      role: 'User',
      email: 'john.doe@example.com',
      password: '', // Do not display or edit passwords directly
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
      gender: 'Male',
      age: 30,
      emergencyContact: '987-654-3210',
    };
  }

  ngOnInit(): void {
    // Here you can fetch user data from a service if needed
  }


  }



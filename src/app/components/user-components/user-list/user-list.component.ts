import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/person';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  // users: Person[] = [];
  // loading: boolean = false;
  // errorMessage: string | null = null;

  // constructor() {}

  // ngOnInit(): void {
  //   this.loadUsers();
  // }

  // // Fetch all users from the backend using fetch()
  // loadUsers(): void {
  //   this.loading = true;
  //   fetch('http://localhost:8000/api/v1/user') // Adjust the URL as needed
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data: Person[]) => {
  //       this.users = data;
  //       this.loading = false;
  //     })
  //     .catch((error) => {
  //       this.loading = false;
  //       this.errorMessage = 'Failed to load users. Please try again later.';
  //       console.error('Error fetching users:', error);
  //     });
  // }

  // // Delete a user using fetch()
  // deleteUser(userId: string): void {
  //   if (confirm('Do you want to delete this user?')) {
  //     fetch(`http://localhost:8000/api/v1/user${userId}`, { method: 'DELETE' })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         this.users = this.users.filter(user => user.id !== userId);
  //       })
  //       .catch((error) => alert('Failed to delete user: ' + error));
  //   }
  // }

  // Add additional methods for user management (if needed)
}


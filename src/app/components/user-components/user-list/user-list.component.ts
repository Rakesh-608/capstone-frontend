// import { Component, OnInit } from '@angular/core';
// import { Person } from '../../../models/person';
// import { UserService } from '../../../services/user.service';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-list.component.html',
//   styleUrl: './user-list.component.css'
// })
// export class UserListComponent implements OnInit {

//   users: Person[] = [];

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   loadUsers() {
//     this.userService.getUsers().subscribe((data) => {
//       this.users = data;
//     });
//   }

// }


// import { Component, OnInit } from '@angular/core';
// import { Person } from '../../../models/person';
// import { UserService } from '../../../services/user.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css'], // Ensure this is 'styleUrls' not 'styleUrl'
// })
// export class UserListComponent implements OnInit {
//   users: Person[] = [];
//   loading: boolean = true; // Track loading state
//   errorMessage: string | null = null; // Track error message

//   constructor(private userService: UserService, private router: Router) {}

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   loadUsers() {
//     this.userService.getUsers().subscribe(
//       (data) => {
//         this.users = data;
//         this.loading = false; // Set loading to false after data is loaded
//       },
//       (error) => {
//         console.error('Error fetching users:', error);
//         this.errorMessage = 'Failed to load users. Please try again later.';
//         this.loading = false; // Set loading to false even if there is an error
//       }
//     );
//   }

//   navigateToUserDetail(userId: string) {
//     this.router.navigate(['/login', userId]); // Adjust the path as needed
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/person';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: Person[] = [];
  loading: boolean = false;
  errorMessage: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Fetch all users from the backend using fetch()
  loadUsers(): void {
    this.loading = true;
    fetch('http://localhost:8000/api/v1/user') // Adjust the URL as needed
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: Person[]) => {
        this.users = data;
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
        this.errorMessage = 'Failed to load users. Please try again later.';
        console.error('Error fetching users:', error);
      });
  }

  // Delete a user using fetch()
  deleteUser(userId: string): void {
    if (confirm('Do you want to delete this user?')) {
      fetch(`http://localhost:8000/api/v1/user${userId}`, { method: 'DELETE' })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.users = this.users.filter(user => user.id !== userId);
        })
        .catch((error) => alert('Failed to delete user: ' + error));
    }
  }

  // Add additional methods for user management (if needed)
}


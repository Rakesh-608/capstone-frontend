// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-profile',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-profile.component.html',
//   styleUrl: './user-profile.component.css'
// })
// export class UserProfileComponent {

// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import for common directives like *ngIf and *ngFor
import { UserService } from '../../../services/user.service';
import { Person } from '../../../models/person';
import { ActivatedRoute } from '@angular/router'; // To capture the route params
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,UserNavbarComponent], // Import necessary Angular modules
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId: string | null = null;  // Store user ID from route params
  userProfile: Person | null = null;  // Store the user profile data
  loading: boolean = true;  // For loading state

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve user ID from route params
    this.userId = this.route.snapshot.paramMap.get('id');
    
    if (this.userId) {
      // Fetch user profile from the service
      this.userService.getUserById(this.userId).subscribe(
        (data: Person) => {
          this.userProfile = data;
          this.loading = false;  // Disable loading once data is fetched
        },
        (error) => {
          console.error('Error fetching user profile:', error);
          this.loading = false;  // Disable loading even if there is an error
        }
      );
    }
  }
}

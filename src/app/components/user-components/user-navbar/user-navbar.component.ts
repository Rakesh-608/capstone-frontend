// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-navbar',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-navbar.component.html',
//   styleUrl: './user-navbar.component.css'
// })
// export class UserNavbarComponent {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import both CommonModule and RouterModule
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
  constructor(private router: Router) {}

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}

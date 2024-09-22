import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule if needed

@Component({
  selector: 'app-user-top-navbar',
  standalone: true,
  imports: [RouterModule], // Add RouterModule if using routing
  templateUrl: './user-top-navbar.component.html',
  styleUrls: ['./user-top-navbar.component.css'] // Corrected to styleUrls
})
export class UserTopNavbarComponent {
  // Add any methods or properties you need here
}

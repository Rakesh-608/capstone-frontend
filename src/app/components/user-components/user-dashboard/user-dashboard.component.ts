import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { UserTopNavbarComponent } from '../user-top-navbar/user-top-navbar.component';
@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [UserNavbarComponent,UserTopNavbarComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}

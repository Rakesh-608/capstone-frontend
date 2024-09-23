import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-components/user-navbar/user-navbar.component';
import { UserTopNavbarComponent } from '../user-components/user-top-navbar/user-top-navbar.component';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [UserNavbarComponent,UserTopNavbarComponent],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

}

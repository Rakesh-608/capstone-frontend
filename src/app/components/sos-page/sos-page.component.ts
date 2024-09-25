import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-components/user-navbar/user-navbar.component';

@Component({
  selector: 'app-sos-page',
  standalone: true,
  imports: [UserNavbarComponent],
  templateUrl: './sos-page.component.html',
  styleUrl: './sos-page.component.css'
})
export class SosPageComponent {

}

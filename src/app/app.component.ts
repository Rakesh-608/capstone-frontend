import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDashboardComponent } from './components/user-components/user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

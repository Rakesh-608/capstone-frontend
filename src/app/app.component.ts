import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router'; // Import Router and NavigationEnd
import { UserNavbarComponent } from './components/user-components/user-navbar/user-navbar.component';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,UserNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  isLandingPage: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage = event.url === '/landing-page'; // Adjust '/landing' to your actual landing page route
      }
    });
  }
























  
  // isLoggedIn: boolean = false;

  // constructor(private userService: UserService, private renderer: Renderer2) {}

  // // ngOnInit(): void {
  // //   // Subscribe to the observable and update isLoggedIn accordingly
  // //   this.userService.isLoggedIn().subscribe(
  // //     (loggedIn: boolean) => {
  // //       this.isLoggedIn = loggedIn;
  // //     },
  // //     (error) => {
  // //       console.error('Error checking login status', error);
  // //     }
  // //   );
  // // }

  // ngOnInit(): void {
  //   // Subscribe to the observable and update isLoggedIn accordingly
  //   this.userService.isLoggedIn().subscribe(
  //     (loggedIn: boolean) => {
  //       this.isLoggedIn = loggedIn;
  //       // Add or remove CSS class based on the login status
  //       if (loggedIn) {
  //         this.renderer.addClass(document.body, 'with-navbar');
  //         this.renderer.removeClass(document.body, 'no-navbar');
  //       } else {
  //         this.renderer.addClass(document.body, 'no-navbar');
  //         this.renderer.removeClass(document.body, 'with-navbar');
  //       }
  //     },
  //     (error) => {
  //       console.error('Error checking login status', error);
  //     }
  //   );
  // }
}

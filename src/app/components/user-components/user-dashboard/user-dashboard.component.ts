import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [UserNavbarComponent, NgIf],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {


  latitude!: number;
  longitude!: number;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocation().then((coords) => {
      this.latitude = coords.latitude;
      this.longitude = coords.longitude;
      console.log('Latitude:', this.latitude, 'Longitude:', this.longitude);
    }).catch((error) => {
      console.error('Error getting location', error);
    });
  }

}

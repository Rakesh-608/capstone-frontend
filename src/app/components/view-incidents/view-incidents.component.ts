import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident';
import { IncidentService } from '../../services/incident.service';
import { UserNavbarComponent } from '../user-components/user-navbar/user-navbar.component';

@Component({
  selector: 'app-view-incidents',
  standalone: true,
  imports: [NgFor, CommonModule, UserNavbarComponent],
  templateUrl: './view-incidents.component.html',
  styleUrl: './view-incidents.component.css'
})
export class ViewIncidentsComponent implements OnInit {
  incidents: Incident[] = [];

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.incidents=this.incidents = [
      {
        location: 'New York, USA',
        time: new Date('2023-09-01T10:00:00'),
        description: 'Power outage in the downtown area.',
        incidentType: 'Power Outage',
        reviewStatus: false
      },
      {
        location: 'Berlin, Germany',
        time: new Date('2023-09-15T08:30:00'),
        description: 'Water leakage reported in central district.',
        incidentType: 'Water Leakage',
        reviewStatus: true
      },
      {
        location: 'Tokyo, Japan',
        time: new Date('2023-09-20T16:00:00'),
        description: 'Earthquake of 5.2 magnitude near city center.',
        incidentType: 'Earthquake',
        reviewStatus: false
      }
    ];
    // this.fetchIncidents();
  }

  fetchIncidents(): void {
    this.incidentService.getIncidents().subscribe(
      (data) => {
        this.incidents = data;
      },
      (error) => {
        console.error('Error fetching incidents:', error);
      }
    );
  }
}

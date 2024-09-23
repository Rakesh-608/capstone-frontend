import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Incident } from '../../../models/incident';
import { IncidentService } from '../../../services/incident.service';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';

@Component({
  selector: 'app-report-incident',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, UserNavbarComponent],
  templateUrl: './report-incident.component.html',
  styleUrl: './report-incident.component.css'
})
export class ReportIncidentComponent {

  incident: Incident = {
    location: '',
    time: new Date().toISOString(),
    description: '',
    incidentType: '',
    reviewStatus: false  // Default value is set here
  };

  constructor(private incidentService: IncidentService) {}

  submitIncident() {
    this.incidentService.reportIncident(this.incident).subscribe(response => {
      console.log('Incident reported successfully:', response);
      // Handle success (e.g., navigate to a different page or show a success message)
    }, error => {
      console.error('Error reporting incident:', error);
      // Handle error (e.g., show an error message)
    });
  }
}

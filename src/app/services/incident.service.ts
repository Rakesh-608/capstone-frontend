import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from '../models/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private apiUrl = 'http://localhost:8080/api/incidents';  // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  reportIncident(incident: Incident): Observable<any> {
    return this.http.post(this.apiUrl, incident);
  }
}



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person'; // Assuming you have a model for Person

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/user/'; // Adjust the URL as necessary

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  createUser(user: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, user,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Fetch a specific user by ID (optional, depending on your requirements)
  getUserById(userId: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/getUser/${userId}`);
  }
  // Add more methods as needed
}


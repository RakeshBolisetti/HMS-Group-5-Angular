import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:8080/api/v1/patient';

  constructor(private http: HttpClient) { }

  getPatientsByPhysician(physicianId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${physicianId}`);
  }
}

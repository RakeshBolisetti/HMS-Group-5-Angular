import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://localhost:8080/api/v1/appointment';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getAppointmentsByStartDate(startdate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${startdate}`);
  }

  getAppointmentsByPhysician(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/physician`);
  }

  getAppointmentsByPhysicianId(physicianId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/physician/${physicianId}`);
  }

  getAppointmentsByPatient(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/patient`);
  }

  getAppointmentByAppointmentId(appointmentid: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/patient/${appointmentid}`);
  }

  getAppointmentsByPatientId(patientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/patient/patientId/${patientId}`);
  }

  getAppointmentsByNurse(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/nurse`);
  }

  getAppointmentsByDate(patientid: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/date/${patientid}`);
  }
  getAllAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

addAppointment(appointmentData: any): Observable<any> {
  console.log(this.apiUrl)
  console.log(appointmentData)
  return this.http.post<any>(`${this.apiUrl}`, appointmentData);
}
}

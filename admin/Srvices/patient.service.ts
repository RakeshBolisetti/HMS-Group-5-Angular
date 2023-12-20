import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
   apiUrl = 'http://localhost:8080/'
  apiVersion = 'api/v1/'

  constructor(private _http: HttpClient) {}

  // Appointment Endpoint implementations
  getAllAppointments(): any {
    return this._http.get(this.apiUrl + this.apiVersion + 'appointment');
  }

  getAdminDashboardInsights(): any {
    return this._http.get(this.apiUrl + this.apiVersion + 'insights');
  }

  fetchAppointments(): any {
    return this._http.get<any[]>(this.apiUrl + this.apiVersion + 'appointment');
  }

  getPatientData(ssn: number): any {
    return this._http.get<any[]>(
      this.apiUrl + this.apiVersion + 'patient/minimal/' + ssn
    );
  }

  fetchDepartments(): any {
    return this._http.get<any[]>(this.apiUrl + this.apiVersion + 'department');
  }
 

  fetchNurses(): any {
    return this._http.get<any[]>(this.apiUrl + this.apiVersion + 'nurse');
  }

  fetchPatients(): any {
    return this._http.get(this.apiUrl + this.apiVersion + 'patient');
  }

  fetchPhysicians(): any {
    return this._http.get<any[]>(this.apiUrl + this.apiVersion + 'physician');
  }

  fetchProcedures(): any {
    return this._http.get<any[]>(this.apiUrl + this.apiVersion + 'procedures');
  }
}

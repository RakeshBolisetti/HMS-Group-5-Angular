import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  apiUrl:string = 'http://localhost:8080/api/v1/patient';

  constructor(private http: HttpClient) {}

  bookAppointment(appointmentData: any): Observable<any> {
    console.log(appointmentData);

    return this.http.post('http://localhost:8080/api/v1/appointment', appointmentData);
  }
  updatePatientSSN(ssn: string, newSSN: string): Observable<any> {
    const url = `${this.apiUrl}/${ssn}`;
    return this.http.put(url,  newSSN );
  }

  updatePatientPhone(ssn: string, newPhone: string): Observable<any> {
    const url = `${this.apiUrl}/phone/${ssn}`;
    return this.http.put(url, { newPhone });
  }

  updatePatientAddress(ssn: string, newAddress: string): Observable<any> {
    const url = `${this.apiUrl}/address/${ssn}`;
    return this.http.put(url, { newAddress });
  }

  getPatients(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  createPatient(patientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, patientData);
  }

  getPatientById(physicianId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${physicianId}`);
  }

  getPatientByUserId(userId: number): Observable<any> {
    console.log(userId);
    return this.http.get(`${this.apiUrl}/userid/${userId}`);
  }

  getMinimalPatients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/minimal`);
  }

  getMinimalPatientBySSN(ssn: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/minimal/${ssn}`);
  }

  getPatientInsurance(patientId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/insurance/${patientId}`);
  }
  getAllAppointmentsByPatientId(patientId:number):Observable<any>{
    return this.http.get(`http://localhost:8080/api/v1/appointment/patient/patientId/${patientId}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl:string='http://localhost:8080/api/v1/appointment/physician'
  constructor(private http:HttpClient) { }

  getAppointmentsByPhysician(physicianId:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${physicianId}`)
  }
  getPhysicianByUserId(userEmail:string):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/v1/physician/physician/PhysicianEmail/${userEmail}`);
  }
}

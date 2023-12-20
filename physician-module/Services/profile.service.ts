import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://localhost:8080/api/v1/physician';

  constructor(private http: HttpClient) { }

  getPhysicianDetails(physicianId: string): Observable<any> {
    const params = new HttpParams().set("empid",physicianId);
    return this.http.get<any>(`${this.baseUrl}`,{params});
  }
    updatePhysicianProfile(physicianId:number, updatedProfile:any):Observable<any>{
      return this.http.put<any>(`${this.baseUrl}/update/name/${physicianId}`,updatedProfile) ;
    }  
     
}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TrainedInService {

  private apiUrl = 'http://localhost:8080/api/v1/trainedIn';

  constructor(private http: HttpClient) { }

  getTrainedInList(physicianId: string): Observable<any[]> {
    const url = `${this.apiUrl}/physician/${physicianId}`;
    return this.http.get<any[]>(url);
  }

  addTrainedIn(training: any): Observable<any> {
    console.log('addTrainedIn')
    const url = `${this.apiUrl}`;
    console.log(url);
    // Include logic to send a POST request with the new training details
    return this.http.post<any>(url,  training );
  }
}

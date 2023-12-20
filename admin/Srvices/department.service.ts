import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = 'http://localhost:8080/api/v1/department';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  updateHead(departmentId: number, newHeadId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/head/${departmentId}`, { head:newHeadId });
  }

  updateDepartmentName(departmentId: number, newDeptName: string): Observable<any> {
    console.log({name:newDeptName})
    return this.http.put<any>(`${this.apiUrl}/update/deptname/${departmentId}`, {name: newDeptName });
  }

  addDepartment(newDepartment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, newDepartment);
  }
}

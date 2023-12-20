import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
  baseUrl:string='';
  constructor() { }
  // getPhysicians():Observable<any>{
  //   return
  // }
}

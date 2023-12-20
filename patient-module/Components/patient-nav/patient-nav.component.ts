import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-nav',
  templateUrl: './patient-nav.component.html',
  styleUrls: ['./patient-nav.component.css']
})
export class PatientNavComponent {
  constructor(private router:Router){}
  logout():void{
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate([''])
  }

}

import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../Services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{
  patients: any[] = [];
  physicianId: number=0; // Assuming you have a way to obtain the physician ID

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.physicianId = +`${sessionStorage.getItem('userId')}`
    this.getPatientsByPhysician();
  }

  getPatientsByPhysician() {
    if (this.physicianId) {
      this.patientService.getPatientsByPhysician(this.physicianId).subscribe(
        (data) => {
          this.patients = data;
        },
        (error) => {
          console.error('Error fetching patients:', error);
        }
      );
    } else {
      console.error('Physician ID is missing.');
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { PatientServiceService } from '../../Services/patient-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  patientProfileForm!: FormGroup;
  patientDetails: any; 
  userId:number=0

  constructor(
    private patientService: PatientServiceService,
    private formBuilder: FormBuilder,
    private router:Router,
    
  ) {}

  ngOnInit(): void {
    this.userId =48
    this.patientService.getPatientByUserId(this.userId).subscribe(data=>{
        this.patientDetails = data;
        console.log(data);
    },err=>console.log(err));

    // Initialize the form with patient details
    this.patientProfileForm = this.formBuilder.group({
      ssn: [this.patientDetails.ssn, Validators.required],
      name: [this.patientDetails.name, Validators.required],
      phone: [this.patientDetails.phone, Validators.required],
      address: [this.patientDetails.address, Validators.required],
      // Add more form controls as needed
    });
  }
  edit():void{
    this.router.navigate([`patient/editProfile/${'23'}`])
  }

  updateProfile() {
    if (this.patientProfileForm.valid) {
      const ssn = this.patientDetails.ssn;
      const updatedProfile = this.patientProfileForm.value;

      // Call service methods to update patient details
      this.patientService.updatePatientSSN(ssn, updatedProfile.ssn).subscribe(
        (response) => {
          console.log('SSN updated successfully:', response);
        },
        (error) => {
          console.error('Error updating SSN:', error);
        }
      );

      this.patientService.updatePatientPhone(ssn, updatedProfile.phone).subscribe(
        (response) => {
          console.log('Phone updated successfully:', response);
        },
        (error) => {
          console.error('Error updating phone:', error);
        }
      );

      this.patientService.updatePatientAddress(ssn, updatedProfile.address).subscribe(
        (response) => {
          console.log('Address updated successfully:', response);
        },
        (error) => {
          console.error('Error updating address:', error);
        });

      // You can handle the other fields in a similar way

      // Add any additional actions after successful update
    }
  }
}

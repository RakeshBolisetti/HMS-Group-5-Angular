import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { PatientService } from '../../physician-module/Services/patient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientServiceService } from '../Services/patient-service.service';

@Component({
  selector: 'app-edit-patient-profile',
  templateUrl: './edit-patient-profile.component.html',
  styleUrls: ['./edit-patient-profile.component.css']
})
export class EditPatientProfileComponent implements OnInit {
  patientId!: number; // Patient ID from the route
  patientDetails: any; // Patient details
  editPatientForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private patientService: PatientServiceService // Update the service injection
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.patientId = params['id'];
      this.getPatientDetails();
    }); 

    this.editPatientForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
      // Add more form controls as needed
    });
  }

  getPatientDetails() {
    // Fetch patient details using patientId from the service
    this.patientService.getPatientByUserId(this.patientId).subscribe(
      (data) => {
        this.patientDetails = data;
        console.log(data);
        this.populateForm();
      },
      (error) => {
        console.error('Error fetching patient details:', error);
      }
    );
  }

  populateForm() {
    if (this.patientDetails && this.editPatientForm) {
      this.editPatientForm.setValue({
        name: this.patientDetails.name,
        phone: this.patientDetails.phone,
        address: this.patientDetails.address
        // Populate other form controls as needed
      });
    }
  }

  submitEdit() {
    if (this.editPatientForm.valid) {
      const updatedPatientData = this.editPatientForm.value;
      console.log(updatedPatientData);
      this.patientService.updatePatientSSN(this.patientDetails.ssn, updatedPatientData).subscribe(
        (response) => {
          console.log('Patient details updated successfully:', response);
          // Navigate back to the patient profile page after successful update
          this.router.navigate(['/patient/profile']);
        },
        (error) => {
          console.error('Error updating patient details:', error);
        }
      );
    }
  }
}

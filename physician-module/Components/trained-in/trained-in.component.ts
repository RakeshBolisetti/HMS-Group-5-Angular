// trained-in.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainedInService } from '../../Services/trained-in.service';

@Component({
  selector: 'app-trained-in',
  templateUrl: './trained-in.component.html',
  styleUrls: ['./trained-in.component.css']
})
export class TrainedInComponent implements OnInit {
  trainedInList: any[] = [];
  physicianId: any; // Replace with the actual physician ID
  trainedInForm!: FormGroup;

  constructor(
    private trainedInService: TrainedInService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Replace this with the actual logic to get the physician ID
    this.physicianId = +`${sessionStorage.getItem('userId')}`;
    sessionStorage.getItem('userId');
    this.getTrainedInList();

    this.trainedInForm = this.formBuilder.group({
      treatment: [null, Validators.required],
      certificationdate: [null, Validators.required],
      certificationexpires: [null, Validators.required]
      // Add more form controls as needed
    });
  }

  getTrainedInList() {
    if (this.physicianId) {
      this.trainedInService.getTrainedInList(this.physicianId).subscribe(
        (data) => {
          this.trainedInList = data;
          console.log(this.trainedInList);
        },
        (error) => {
          console.error('Error fetching trained in list:', error);
        }
      );
    } else {
      console.error('Physician ID is missing.');
    }
  }

  addTrainedIn() {
    
    if (this.trainedInForm.valid) {
      console.log('hii')
      const newTraining = {
        physician: this.physicianId,
        treatment: this.trainedInForm.value.treatment,
        certificationdate: this.trainedInForm.value.certificationdate,
        certificationexpires: this.trainedInForm.value.certificationexpires
      };

      this.trainedInService.addTrainedIn({...newTraining,physician:this.physicianId}).subscribe(
        (response) => {
          console.log('TrainedIn added successfully:', response);
          this.getTrainedInList(); // Refresh the list after adding a new entry
          this.trainedInForm.reset(); // Reset the form after successful addition
        },
        (error) => {
          console.error('Error adding trainedIn:', error);
        }
      );
    }
  }
}

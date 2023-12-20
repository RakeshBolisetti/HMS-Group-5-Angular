import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  physicianDetails: any;
  physicianId: any; 
  editMode: boolean = false;
  email: any;

  profileForm!: FormGroup;

  constructor(
    private physicianProfileService: ProfileService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.physicianId = sessionStorage.getItem('userId');
    this.email = sessionStorage.getItem('email');

    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ssn: ['', [Validators.required]]
      
    });

    this.getPhysicianDetails();
  }

  getPhysicianDetails() {
    if (this.physicianId) {
      this.physicianProfileService.getPhysicianDetails(this.physicianId).subscribe(
        (data) => {
          this.physicianDetails = data[0];
          console.log(this.physicianDetails);
          this.populateForm();
        },
        (error) => {
          console.error('Error fetching physician details:', error);
        }
      );
    } else {
      console.error('Physician ID is missing.');
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;

    if (this.editMode) {
      this.profileForm.enable(); 
    } else {
      this.profileForm.disable(); 
      this.populateForm(); 
    }
  }

  populateForm() {
    if (this.physicianDetails && this.profileForm) {
      this.profileForm.setValue({
        name: this.physicianDetails.name,
        position: this.physicianDetails.position,
        email: this.physicianDetails.email,
        ssn: this.physicianDetails.ssn
      
      });
    }
  }

  saveChanges() {
  
    if (this.profileForm.valid) {
      let updatedProfile = this.profileForm.value;
      console.log(updatedProfile);
      updatedProfile = {...updatedProfile,...this.physicianDetails}
      console.log(updatedProfile);
     
      this.physicianProfileService.updatePhysicianProfile(this.physicianId, updatedProfile).subscribe(
        (response) => {
          console.log('Profile updated successfully:', response);
          this.editMode = false;
        },
        (error) => {
          console.error('Error updating profile:', error);
        }
      );
      this.editMode = false; // For demo purposes, assume successful update
    }
  }

  cancelEdit() {
    this.editMode = false;
    this.populateForm(); // Reset form values to original details
  }
}

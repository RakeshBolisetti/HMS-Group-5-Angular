// appointment.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientServiceService } from '../../Services/patient-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  providers:[DatePipe],
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  myDate = new Date();



  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss.SSSSSS') || '';
  }
  appointmentForm!: FormGroup;
  examinationRooms: string[] = ['Room A', 'Room B', 'Room C']; // Add your examination room options

  constructor(
    private appointmentService: PatientServiceService,
    private formBuilder: FormBuilder,
    private datePipe:DatePipe
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      patient: ['', Validators.required],
      physician: ['', Validators.required],
      appointmentDateTime: ['', Validators.required],
      examinationroom: ['', Validators.required] // Added examination room control
      // Add more form controls as needed
    });
  }

  submitAppointment() {
    if (this.appointmentForm.valid) {
      let appointmentData = this.appointmentForm.value;
      appointmentData = {...appointmentData,appointmentDateTime:this.formatDate(appointmentData.appointmentDateTime)}
      this.appointmentService.bookAppointment(appointmentData).subscribe(
        (response) => {
          alert('Appointment booked successfully:');
       
        },
        (error) => {
          alert('Error booking appointment:');
   
        }
      );
    }
  }
}

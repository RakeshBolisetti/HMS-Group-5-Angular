import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../Srvices/appointment.service';
import { DatePipe } from '@angular/common';

// import { AppointmentComponent } from 'src/app/Modules/patient-module/Components/appointment/appointment.component';



@Component({
  selector: 'app-appointment-admin',
  templateUrl: './appointment.component.html',
  providers:[DatePipe],
  styleUrls: ['./appointment.component.css']
})
export class AdminAppointmentComponent  implements OnInit{
  myDate = new Date();

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss.SSSSSS') || '';
  }
  appointments: any[] = [];
  filteredAppointments: any[] = [];
  examinationRooms: string[] = ['Room A', 'Room B', 'Room C']
  filter: any = {
    appointmentDateTime:'',
    physician2:{
      employeeid:''
    },
    patient2:{
      ssn:''
    },

  };
  newAppointment:any = {
    // Provide the details for the new appointment
    // For example:
    // physicianId: 1,
    // patientId: 2,
    // appointmentDate: '2023-12-31',
    // ...
    patient2:{
      ssn:0
    },
    physician2:{
      employeeid:0
    }
    ,
    appointmentDateTime:'',
    examinationroom:''
  };

  constructor(private appointmentService: AppointmentService,private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe((data) => {
      this.appointments = data;
      
      this.filteredAppointments = [...this.appointments];
      console.log(this.filteredAppointments);
    },err=>alert("something occurred"));
  }

  filterAppointments(): void {
    console.log(this.filter);
    this.filteredAppointments = this.appointments.filter((appointment) => {
      console.log(appointment.appointmentDateTime.indexOf(this.filter.appointmentDateTime )>=0 )
      return (
        (appointment.appointmentDateTime.indexOf(this.filter.appointmentDateTime )>=0 && this.filter.appointmentDateTime!=='') ||
        (this.filter.physician2.employeeid)===appointment.physician2.employeeid ||
        (this.filter.patient2.ssn )===appointment.patient2.ssn
      );
    });
 console.log(this.filteredAppointments)
  }
  reset():void{
  this.filteredAppointments = [...this.appointments];
  }
  addNewAppointment() {
    
    this.newAppointment.appointmentDateTime = this.formatDate(this.newAppointment.appointmentDateTime);
    this.newAppointment = {patient:this.newAppointment.patient2.ssn,...this.newAppointment,physician:this.newAppointment.physician2.employeeid}
    this.appointmentService.addAppointment(this.newAppointment).subscribe(
      (response) => {
        console.log('Appointment added successfully:', response);
        // You can refresh the list of appointments or take other actions as needed
      },
      (error) => {
        // console.error('Error adding appointment:', error);
        alert("some error occurred while adding appointment")
      }
    );
    this.loadAppointments();
  }

}

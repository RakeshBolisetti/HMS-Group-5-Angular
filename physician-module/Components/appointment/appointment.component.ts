import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhysicianService } from '../../Services/physician.service';
import { AppointmentService } from '../../Services/appointment.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent  implements OnInit{
  appointments: any[] = [];
  physicianId: number= +`${sessionStorage.getItem('userId')}`;
  patients:any[]=[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    // this.getPhysicianByUserId();
    this.getAppointmentsByPhysician();
  
    
  }

  getAppointmentsByPhysician() {
    console.log(this.physicianId);
    if (this.physicianId) {
      this.appointmentService.getAppointmentsByPhysician(this.physicianId).subscribe(
        (data) => {
          this.appointments = data;
          console.log(data);
        },
        (error) => {
          console.error('Error fetching appointments:', error);
        }
      );
    } else {
      console.error('Physician ID is missing.');
    }
  }
  getPhysicianByUserId():void{
    let useremail = sessionStorage.getItem("useremail")+''
    
    this.appointmentService.getPhysicianByUserId(useremail).subscribe(res=>{
      this.physicianId=res.employeeId
    },err=>{
      alert("some error occured")
    })


  }
}

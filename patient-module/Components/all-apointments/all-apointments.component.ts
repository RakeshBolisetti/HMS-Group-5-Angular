import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientServiceService } from '../../Services/patient-service.service';

@Component({
  selector: 'app-all-apointments',
  templateUrl: './all-apointments.component.html',
  styleUrls: ['./all-apointments.component.css']
})
export class AllApointmentsComponent {
  patientId: number =12345678;
  appointments!: any[]; // Update with your appointment model

  constructor(
    private route: ActivatedRoute,
    private appointmentService: PatientServiceService // Replace with your actual appointment service
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.patientId = params['patientid'];
    //   this.getAppointments();
    // });
    this.getAppointments();
  }

  getAppointments() {
    // Call the service method to get appointments by patientId
    this.appointmentService.getAllAppointmentsByPatientId(this.patientId).subscribe(
      (data) => {
        this.appointments = data;

        console.log(data);

      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }

}

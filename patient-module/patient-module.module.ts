import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientModuleRoutingModule } from './patient-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientNavComponent } from './Components/patient-nav/patient-nav.component';
import { PatientDashboardComponent } from './Components/patient-dashboard/patient-dashboard.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { PatientComponent } from './Components/patient/patient.component';
import { EditPatientProfileComponent } from './edit-patient-profile/edit-patient-profile.component';
import { AllApointmentsComponent } from './Components/all-apointments/all-apointments.component';



@NgModule({
  declarations: [
    PatientNavComponent,
    PatientDashboardComponent,
    AppointmentComponent,
    PatientComponent,
    EditPatientProfileComponent,
    AllApointmentsComponent
   
  ],
  imports: [
    CommonModule,
    PatientModuleRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PatientModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavComponent } from './Components/admin-nav/admin-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAppointmentComponent } from './Components/appointment/appointment.component';
import { PatientComponent } from './Components/patient/patient.component';
import { PhysicianComponent } from './Components/physician/physician.component';
import { PipesPipe } from './Components/pipes.pipe';
import { ProceduresComponent } from './Components/procedures/procedures.component';
// import { AppointmentComponent } from '../patient-module/Components/appointment/appointment.component';


@NgModule({
  declarations: [
    AdminNavComponent,
    HomeComponent,
    AdminDashboardComponent,
    DepartmentsComponent,
    AdminAppointmentComponent,
    PatientComponent,
    PhysicianComponent,
    PipesPipe,
    ProceduresComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe
  ]
})
export class AdminModule { }

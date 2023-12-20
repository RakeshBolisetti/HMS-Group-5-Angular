import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicianModuleRoutingModule } from './physician-module-routing.module';
import { PhysicianNavComponent } from './Components/physician-nav/physician-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './Components/patient/patient.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { TrainedInComponent } from './Components/trained-in/trained-in.component';



@NgModule({
  declarations: [
    PhysicianNavComponent,
    HomeComponent,
    AppointmentComponent,
    PatientComponent,
    ProfileComponent,
    TrainedInComponent,

  ],
  imports: [
    CommonModule,
    PhysicianModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PhysicianModuleModule { }

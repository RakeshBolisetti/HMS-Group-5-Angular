import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientNavComponent } from './Components/patient-nav/patient-nav.component';
import { PatientDashboardComponent } from './Components/patient-dashboard/patient-dashboard.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { PatientComponent } from './Components/patient/patient.component';
import { EditPatientProfileComponent } from './edit-patient-profile/edit-patient-profile.component';
import { AllApointmentsComponent } from './Components/all-apointments/all-apointments.component';


const routes: Routes = [
  {
    path:'appointment',component:AppointmentComponent
  },
  {path:'profile',component:PatientComponent},{
    path:'editProfile/:id',component:EditPatientProfileComponent
  },
  {path:'my-appointments',component:AllApointmentsComponent},
  
  {
  path:'',component:PatientDashboardComponent,

  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientModuleRoutingModule { }

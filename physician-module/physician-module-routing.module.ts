import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysicianNavComponent } from './Components/physician-nav/physician-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { PatientComponent } from './Components/patient/patient.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { TrainedInComponent } from './Components/trained-in/trained-in.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'patients',component:PatientComponent},
  {path:'profile',component:ProfileComponent},
  {path:'trained-in',component:TrainedInComponent}
  // {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicianModuleRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavComponent } from './Components/admin-nav/admin-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { AdminAppointmentComponent } from './Components/appointment/appointment.component';
import { PatientComponent } from './Components/patient/patient.component';
import { PhysicianComponent } from './Components/physician/physician.component';
import { ProceduresComponent } from './Components/procedures/procedures.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[{
      path:'home',component:AdminDashboardComponent
    },{
      path:'department',component:DepartmentsComponent

    },

    {
      path:'appointments',component:AdminAppointmentComponent
    },
    {
      path:'patients',component:PatientComponent
    },
    {
      path:'physicians',component:PhysicianComponent
    },
    {
      path:'procedures',component:ProceduresComponent
    },
    {
      path:'',redirectTo:'/admin/home',pathMatch:'full'
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

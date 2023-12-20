import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/Modules/physician-module/Services/appointment.service';
import { PhysicianService } from 'src/app/Modules/physician-module/Services/physician.service';
import { AuthenticateService } from 'src/app/Services/authenticate.service';
// import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:any = {
    "email":"",
    "password":""
  }
  chk:boolean=false;
  show:string = "password";
  showPassword():void{
    this.show=this.chk?"text":"password"
  }

  constructor(private router:Router,private loginService:AuthenticateService,private appointmentService:AppointmentService){}
  login():void{
    this.loginService.login(this.user).subscribe(res=>{
        sessionStorage.setItem("token",`Bearer ${res.token}`);
        sessionStorage.setItem("role",res.role);
       sessionStorage.setItem('email',this.user.email);
       if(res.role==='[ADMIN]'){
        alert("Successfully Logged in")
        this.router.navigate(['admin'])

  }
       if(res.role==='[PHYSICIAN]'){
        this.appointmentService.getPhysicianByUserId(this.user.email).subscribe(physician=>{
          console.log(physician);
         
            
          sessionStorage.setItem('userId',physician.employeeid);
          
          console.log(res);
          alert("Successfully Logged in")
          this.router.navigate(['physician'])
          
        })
      }
         
      if(res.role==='[PATIENT]'){
        this.loginService.getPatientByEmail(this.user.email).subscribe(patient=>{
          sessionStorage.setItem("userId",patient.ssn);
          console.log(patient.ssn);
          alert("Successfully Logged in")
          this.router.navigate(['patient'])
          
        })
      
        
      


        
        
      }
       
    },err=>{
      console.log("Something Went Wrong");
      alert("Error Occurred While Logging in")
    })

  }

}

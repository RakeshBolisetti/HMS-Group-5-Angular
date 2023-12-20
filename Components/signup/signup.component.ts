import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/Services/authenticate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {
    this.createForm();
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  createForm() {
    this.signupForm = this.fb.group({
      ssn: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')!.value;
    const confirmPassword = formGroup.get('confirmPassword')!.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  submitForm() {
    if (this.signupForm.invalid) {
      alert('Please fill in all required fields and enter a valid email address');
      return;
    }

    const now = new Date();
    const user = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
     
      role: 'PATIENT',
      ssn: this.signupForm.value.ssn
    };
     const patient ={
      ssn:this.signupForm.value.ssn,
      name:this.signupForm.value.firstName,
    }
   
    const apiUrl = 'http://localhost:8080/register';
    console.log(user);
    this._http.post(apiUrl, user).subscribe({
      next: (res: any)=>{
        
        alert("Registered successfully !\nPlease login to continue");
        this._router.navigate(['/login']);
        
      },
      error:(err: Error)=>{
        alert("An error occured while signing up !");
        console.log(err);
      }
    });
  
    
    
  
  }

}

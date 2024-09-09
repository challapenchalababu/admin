import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registrationForm: FormGroup;
  apiUrl = 'http://localhost:3000/';

  constructor(private fb: FormBuilder,private http:HttpClient) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      let req={
        firstName:this.registrationForm.get('firstName')?.value,
        lastName:this.registrationForm.get('lastName')?.value,
        number:parseInt(this.registrationForm.get('phoneNumber')?.value),
        email:this.registrationForm.get('email')?.value,
        password:this.registrationForm.get('password')?.value
      }
      this.http.post(this.apiUrl + 'register',req).subscribe((res: any) => {
        console.log('User registered successfully:', res);
        alert(res.message)
      },
      (err: any) => {
        alert(err.error.message)
       
      }
    );
    }
  }
}
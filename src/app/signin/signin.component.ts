import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  registrationForm: FormGroup;
  apiUrl = 'http://localhost:3000/';

  constructor(private fb: FormBuilder,private http:HttpClient,private rout:Router) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      let req={
        email:this.registrationForm.get('email')?.value,
        password:this.registrationForm.get('password')?.value
      }
      console.log('req',req)
    //   this.http.post(this.apiUrl + 'login',req).subscribe((res: any) => {
    //     console.log('User login successfully:', res);
    //     alert(res.message)
    //   },
    //   (err: any) => {
    //     alert(err.error.message)
       
    //   }
    // );
    }
  }
  creatAc(){
    this.rout.navigate(['/register']);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
 submitted = false;
 invalidLogin = false;
 emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$' ;
 pwdpattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$';


  constructor(private formBuilder: FormBuilder) { }

  onSubmit()
 {
 this.submitted = true;
 if(this.loginForm.invalid){
 return;
 }
 if(this.loginForm.controls.email.value === 'dixita.mathur@gmail.com' &&
 this.loginForm.controls.password.value === 'password'){
 window.alert("Login successful!!");
 }
 else{
 this.invalidLogin = true;
 }
 }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.pattern(this.pwdpattern)]]
      });
  }

}

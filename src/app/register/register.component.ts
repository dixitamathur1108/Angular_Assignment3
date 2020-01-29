import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
 submitted = false;
 invalidRegister = false;
 uname = '^[a-zA-Z \-\']+';
 mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
 emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$' ;
 pwdpattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$';

  constructor(private formBuilder: FormBuilder) { }
  onSubmit()
  {
    this.submitted = true;
    if (this.registerForm.invalid) {
    return;
  }
    if (this.registerForm.controls.email.value === 'dixita.mathur@gmail.com' &&
    this.registerForm.controls.password.value === 'password'){
    window.alert( 'Login successful!!' );
  }
    else {
      this.invalidRegister = true;
  }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [ Validators.required, Validators.pattern(this.pwdpattern)]],
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern(this.uname)]],
      mobile: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]]
      });
  }

}

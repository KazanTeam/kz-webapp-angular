import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      // username: ['', Validators.required],
      email: ['', Validators.required],
      // phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public login() {
    const userForm = {
      // username: this.loginForm.get('username').value,
      email: this.loginForm.get('email').value,
      // phoneNumber: this.loginForm.get('phoneNumber').value,
      password: this.loginForm.get('password').value,
      mt4Password: this.loginForm.get('password').value // mt4 pass equal password when create
    }

    console.log(userForm);

    if(this.loginForm.valid){
      this.loginService.authenticate(userForm)
        .subscribe(data => {
          if(data === true){
            this.router.navigate(['dashboard'])
          }
        },err => {
          
        })
    }

  }
}

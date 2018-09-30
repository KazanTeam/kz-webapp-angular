import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { resolve } from 'q';
import { AuthService } from '../../services/auth.service';

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
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: [''],
    })
  }

  public login() {
    const userForm = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    }

    console.log(userForm);

    if (this.loginForm.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(userForm.email, userForm.password)
        .then(res => {
          resolve(res);
          this.afAuth.idToken
            .subscribe(data => {
              this.authService.accessToken = data;
              console.log(this.authService.accessToken);
            })
        })
      // this.loginService.authenticate(userForm)
      //   .subscribe(data => {
      //     this.router.navigate(['dashboard'])
      //   })
      //   , err => {

      //   };
    }
  }
}

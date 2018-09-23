import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public register() {
    const registerForm = {
      username: this.registerForm.get('username').value,
      email: this.registerForm.get('email').value,
      phoneNumber: this.registerForm.get('phoneNumber').value,
      password: this.registerForm.get('password').value,
      mt4Password: this.registerForm.get('password').value // mt4 pass equal password when create
    }
    console.log(registerForm)

    if (this.registerForm.valid){
      this.registerService.register(registerForm)
        .subscribe(data => {
          if(data === true){
            this.router.navigate(['login']);
          }
        })
    }
  }


}

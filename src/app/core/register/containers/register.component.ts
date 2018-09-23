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

  constructor(private fb: FormBuilder,
     private registerService: RegisterService,
     private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      refId: ['', Validators.required],
      // telegramId: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  public register() {
    const registerForm = {
      firstname: this.registerForm.get('firstname').value,
      lastname: this.registerForm.get('lastname').value,
      refId: this.registerForm.get('refId').value,
      email: this.registerForm.get('email').value,
      phoneNumber: this.registerForm.get('phoneNumber').value,
      password: this.registerForm.get('password').value,
      mt4Password: this.registerForm.get('password').value, // mt4 pass equal password when create
      username: this.registerForm.get('username').value,
      telegramId: 0,
      userId: 0
    };
    console.log(registerForm);

    if (this.registerForm.valid) {
      this.registerService.register(registerForm).subscribe(data => {
        if (data === 'User added successfully!') {
          this.router.navigate(['login']);
        }
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private forgotPasswordService: ForgotPasswordService
  ) { }

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  public sendEmail() {
    const sendForm = {
      email: this.forgotPasswordForm.get('email').value
    };

    if (this.forgotPasswordForm.valid) {
      this.forgotPasswordService.sendEmail(sendForm)
        .subscribe(data => {

        })
    }
  }
}

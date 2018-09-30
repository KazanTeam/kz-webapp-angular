import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userForm: FormGroup;
  id: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.router.navigate(['/dashboard'])
    }
    console.log(this.id);
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: [{ value: '', disabled: true }, , Validators.required],
      firstname: [{ value: '', disabled: true }, , Validators.required],
      lastname: [{ value: '', disabled: true }, , Validators.required],
      // refId: value: [{'',disabled: true}, , Validators.required],
      telegramId: [{ value: '', disabled: true }, , Validators.required],
      phoneNumber: [{ value: '', disabled: true }, , Validators.required],
      password: [{ value: '', disabled: true }, , Validators.required],
      username: [{ value: '', disabled: true }, , Validators.required]
    });

    this.getUserData();
  }

  public getUserData() {
    this.userService.getUserProfile(this.id)
      .subscribe(data => {
        this.userForm.get('email').setValue(data.email);
        this.userForm.get('firstname').setValue(data.firstname);
        this.userForm.get('lastname').setValue(data.lastname);
        this.userForm.get('telegramId').setValue(data.telegramId);
        this.userForm.get('phoneNumber').setValue(data.phoneNumber);
        this.userForm.get('username').setValue(data.username);
      })
  }
}

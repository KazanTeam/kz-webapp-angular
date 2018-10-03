import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
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
    this.editUserForm = this.fb.group({
      email: [{ value: '', disabled: true }, Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      // refId: ['', Validators.required],
      telegramId: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  public getUserData() {
    this.userService.getUserProfile(this.id)
      .subscribe(data => {
        this.editUserForm.get('email').setValue(data.email);
        this.editUserForm.get('firstname').setValue(data.firstname);
        this.editUserForm.get('lastname').setValue(data.lastname);
        this.editUserForm.get('telegramId').setValue(data.telegramId);
        this.editUserForm.get('phoneNumber').setValue(data.phoneNumber);
        this.editUserForm.get('username').setValue(data.username);
      })
  }

  public updateUser() {
    const editUserForm = {
      firstname: this.editUserForm.get('firstname').value,
      lastname: this.editUserForm.get('lastname').value,
      phoneNumber: this.editUserForm.get('phoneNumber').value,
      username: this.editUserForm.get('username').value,
      telegramId: 0,
      userId: 0
    };
    console.log(editUserForm);

    if (this.editUserForm.valid) {
      this.userService.updateUserProfile(editUserForm)
        .subscribe(data => {

        })
    }
  }
}

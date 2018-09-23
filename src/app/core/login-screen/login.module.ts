import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'app/common/pages/login/login.component';
import { LoginRoutingModule } from './login.routing';
import { LoginScreenComponent } from './container/login-screen.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginScreenComponent
    ]
})

export class LoginModule { }

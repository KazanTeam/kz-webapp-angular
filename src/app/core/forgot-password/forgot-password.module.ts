import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordRoutingModule } from './forgot-password.routing';
import { ForgotPasswordComponent } from './containers/forgot-password.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ForgotPasswordRoutingModule,
    ],
    declarations: [
        ForgotPasswordComponent
    ]
})

export class ForgotPasswordModule { }

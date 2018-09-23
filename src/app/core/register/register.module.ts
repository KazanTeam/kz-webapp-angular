import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'app/common/pages/login/login.component';
import { RegisterRoutingModule } from './register.routing';
import { RegisterComponent } from './containers/register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RegisterRoutingModule
    ],
    declarations: [
        RegisterComponent
    ]
})

export class RegisterModule { }

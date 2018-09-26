import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register.routing';
import { RegisterComponent } from './containers/register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RegisterRoutingModule,
    ],
    declarations: [
        RegisterComponent
    ]
})

export class RegisterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupComponent } from './containers/group.component';
import { EditGroupComponent } from './components/edit-group/edit-group.component';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    GroupComponent,
    EditGroupComponent
  ]
})
export class GroupModule { }

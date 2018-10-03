import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './containers/group.component';
import { EditGroupComponent } from './components/edit-group/edit-group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupComponent
  },
  {
    path:'edit-group/:id',
    component: EditGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: 'users', component: UserlistComponent },
  // { path: 'add-user', component: AddUserComponent },
  // { path: 'edit-user/:id', component: EditUserComponent },
  // { path: 'role-management', component: RoleManagementComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

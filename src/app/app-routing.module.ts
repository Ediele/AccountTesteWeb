import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {UserListComponent} from './pages/user/user-list/user-list.component'
import {ProfileListComponent} from './pages/profile/profile-list/profile-list.component'
import {UserDetailComponent} from './pages/user/user-detail/user-detail.component'
import {ProfileDetailComponent} from './pages/profile/profile-detail/profile-detail.component'


const routes: Routes = [
  {path: '', redirectTo: '/User', pathMatch: 'full'},
  {path: 'user', component: UserListComponent},
  {path: 'profile', component:ProfileListComponent},
  {path: 'userDetail', component: UserDetailComponent},
  {path: 'profileDetail', component:ProfileDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

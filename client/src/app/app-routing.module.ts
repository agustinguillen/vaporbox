import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';
import { TimelineComponent } from './components/timeline/timeline.component';

const routes: Routes = [
    {
      path: '',
      component: RegisterComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'user-edit',
      component: UserEditComponent
    },
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'users/:page',
      component: UsersComponent
    },
    {
      path: 'timeline',
      component: TimelineComponent
    },
    {
      path: '**',
      component: HomeComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

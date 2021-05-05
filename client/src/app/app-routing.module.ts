import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowersComponent } from './components/followers/followers.component';

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
      path: 'profile/:id',
      component: ProfileComponent
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
      path: 'following/:id/:page',
      component: FollowingComponent
    },
    {
      path: 'followers/:id/:page',
      component: FollowersComponent
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

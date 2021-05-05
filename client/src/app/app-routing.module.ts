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

import { UserGuard } from './services/user.guard';

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
      component: HomeComponent,
      canActivate: [UserGuard]
    },
    {
      path: 'profile/:id',
      component: ProfileComponent,
      canActivate: [UserGuard]
    },
    {
      path: 'user-edit',
      component: UserEditComponent,
      canActivate: [UserGuard]
    },
    {
      path: 'users',
      component: UsersComponent,
      canActivate: [UserGuard]
    },
    {
      path: 'users/:page',
      component: UsersComponent,
      canActivate: [UserGuard]
    },
    {
      path: 'timeline',
      component: TimelineComponent,
      canActivate: [UserGuard]
    },
    {
      path: 'following/:id/:page',
      component: FollowingComponent,
      canActivate: [UserGuard]
    },
    {
      path: 'followers/:id/:page',
      component: FollowersComponent,
      canActivate: [UserGuard]
    }
    /*{
      path: '**',
      component: HomeComponent
    }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

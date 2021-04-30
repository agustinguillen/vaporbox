import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  providers: [ UserService ]
})
export class UserEditComponent implements OnInit {
  public user: User;
  public identity;
  public token;
  public status: string;

  constructor(
      private _router:Router,
      private _route:ActivatedRoute,
      private _userService:UserService
  ) { 
    this.user = this._userService.getIdentity();
    this.identity = this.user;
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
      console.log(this.user);
      console.log('user-edit.component se ha cargado');
  }

  onSubmit(){
    console.log(this.user)
  }

}

import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit, DoCheck {
  public title = 'Vaporbox';
  public identity;
  public token;

  constructor(
    private _userService:UserService
  ){}

  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck(){
      this.identity = this._userService.getIdentity();
  }
}

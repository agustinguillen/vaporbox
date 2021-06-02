import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
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
  public router: string;

  constructor(
    private _userService:UserService,
    private _router: Router
  ){
    this.router = _router.url;
  }
  
  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }
  
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this._router.events.subscribe(e => {
      this.router = this._router.url;
    })
  }

  onActivate(event) {
    window.scroll(0,0);
  }
}

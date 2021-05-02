import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public identity;
  public url:string;

  constructor( public user: UserService,
    private _route: ActivatedRoute,
    private _router: Router ) { 
      this.identity = user.identity;
      this.url = GLOBAL.url;
  }

  ngOnInit(): void {
  }

  logout(){
      localStorage.clear();
      this.identity = null;
      console.log();
      this._router.navigate(['/register']);
      
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
   ],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;
  public status: string;
  public loading: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.loading = true;
    this.user = new User( "", "", "", "", "", "", "ROLE_USER", "", "");
   }

  ngOnInit(): void {
    if(localStorage['firstTimeLoad'] ==='TRUE'){
      this.loading = false;
    }else{
      setTimeout(() => {
        this.loading = false;  
        localStorage['firstTimeLoad']='TRUE'; 
      }, 3000)
    }
  }
  
  onSubmit(form){
    this._userService.register(this.user).subscribe(
        response => {
            if(response.user && response.user._id){
              this.status = 'success';
              form.reset();
              this._router.navigate(['/login'])
            }else{
              this.status = 'error';
            }
        },
        error =>{
            console.log(<any>error)
        }
    );
  }
}

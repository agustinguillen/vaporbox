import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
   ],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {
  public user:User;
  public status:string;
  public identity;
  public token;
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

  onSubmit(){
      //Loguear al usuario y conseguir sus datos
      this._userService.signup(this.user).subscribe(
          response => {
            this.identity = response.user;

            if(!this.identity || !this.identity._id){
              this.status ='error';
            }else{
              //Persistir sesión en la navegación
              localStorage.setItem('identity', JSON.stringify(this.identity));


              //Conseguir el token
              this.getToken();

            }
          },
          error => {
            let errorMessage = <any>error;
            console.log(errorMessage);

            if(errorMessage != null) {
                  this.status = 'error'
            }
          }
      )
  }

  getToken(){
    this._userService.signup(this.user, 'true').subscribe(
      response => {
        this.token = JSON.stringify(response.token);

        if(this.token.length <= 0){
          this.status ='error';
        }else{
          //Persistir el token de usuario
          localStorage.setItem('token', this.token);

          //Conseguir los contadores o estadisticas de usuario
          this.getCounters();

        }
      },
      error => {
        let errorMessage = <any>error;
        console.log(errorMessage);
        
        if(errorMessage != null) {
          this.status = 'error'
        }
      }
      );     
    }
    
    getCounters(){
      this._userService.getCounters().subscribe(
        response => {
          localStorage.setItem('stats', JSON.stringify(response));
          this.status = 'success'; 
          this._router.navigate(['/timeline']);
          
        },
        error => {
          console.log(<any>error);
        }
    )
  }

}

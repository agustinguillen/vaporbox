import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {
  public user:User;
  public status:string;
  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {

    this.user = new User( "", "", "", "", "", "", "ROLE_USER", ""); 

   }

  ngOnInit(): void {
  }

  onSubmit(){
      //Loguear al usuario y conseguir sus datos
      this._userService.signup(this.user).subscribe(
          response => {
            this.identity = response.user;

            console.log(this.identity);

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
          this._router.navigate(['/home']);
          
        },
        error => {
          console.log(<any>error);
        }
    )
  }

}

import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { GLOBAL } from '../../services/global';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
   ],
  providers: [ UserService, UploadService ]
})
export class UserEditComponent implements OnInit {
  public user: User;
  public identity;
  public token;
  public status:string;
  public url:string;


  constructor(
      private _router:Router,
      private _route:ActivatedRoute,
      private _userService:UserService,
      private _uploadService:UploadService
  ) { 
    this.user = this._userService.getIdentity();
    this.identity = this.user;
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    this._userService.updateUser(this.user).subscribe(
        response => {
            if(!response.user){
              this.status = 'error';
            }else{
              
              this.status = 'success';
              localStorage.setItem('identity', JSON.stringify(this.user));
              this.identity = this.user;

              //Subir archivo de imagen usuario
              this._uploadService.makeFileRequest(this.url+'upload-image-user/'+this.user._id, [], this.filesToUpload, this.token, 'image')
                                  .then((result:any)=>{
                                      this.user.image = result.user.image;
                                      localStorage.setItem('identity', JSON.stringify(this.user));
                                  });
            }
        },
        error => {
            let errorMessage = <any>error;
            console.log(errorMessage);

            if(errorMessage != null){
              this.status = 'error';
            }
        }
    );
  }
  
  public filesToUpload:Array<File>
  fileChangeEvent(fileInput:any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  deleteUser(id){
    this._userService.deleteUser(id).subscribe(
      response => {
        if(response){
          localStorage.clear();
          this.identity = null;
          this._router.navigate(['/register']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

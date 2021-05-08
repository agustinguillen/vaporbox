import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { PublicationService } from '../../services/publication.service';
import { GLOBAL } from '../../services/global';
import { Publication } from '../../models/publication';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0, height: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
   ],
  providers: [ UserService, UploadService, PublicationService ]
})

export class SidebarComponent implements OnInit{
  public identity;
  public token;
  public stats;
  public url;
  public status:string;
  public publication:Publication;
  public filesToUpload: Array<File>;
  public showNewPublication:boolean;

  @Output() sent = new EventEmitter();


  constructor(
    private _userService:UserService,
    private _publicationService:PublicationService,
    private _uploadService:UploadService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.stats = this._userService.getStats();
    this.url = GLOBAL.url;
    this.publication = new Publication( '', '', '', '', this.identity._id );
    this.showNewPublication = false;
   }

  ngOnInit(): void {
  }

  onSubmit(form, event){
    this._publicationService.addPublication(this.token, this.publication).subscribe(
      response => {
        if(response.publication){
          if(this.filesToUpload && this.filesToUpload.length){
            //subir imagen
            this._uploadService.makeFileRequest(this.url + 'upload-image-pub/' + response.publication._id, [], this.filesToUpload, this.token, 'image')
                                .then((result:any) => {
                                    this.publication.file = result.image;
                                    this.status = 'success';
                                    this.stats = this._userService.getStats();
                                    form.reset();
                                    this._router.navigate(['/timeline']);
                                    this.sent.emit({sent: 'true'});
                                });
          }else{
            this.status = 'success';
            form.reset();
            this.stats = this._userService.getStats();
            this._router.navigate(['/timeline']);
            this.sent.emit({sent: 'true'});
            
          }
          
        }else{
          this.status = 'error';
        }
      },
      error => {
        let errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'error';
        }
      }
    )
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  showForm(event){
    if(this.showNewPublication === true){
      this.showNewPublication = false;
    }else{
      this.showNewPublication = true;
    }
  }

}

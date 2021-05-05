import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { PublicationService } from '../../services/publication.service';
import { GLOBAL } from '../../services/global';
import { Publication } from '../../models/publication';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
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
                                    form.reset();
                                    this._router.navigate(['/timeline']);
                                    this.sent.emit({sent: 'true'});
                                });
          }else{
            this.status = 'success';
            form.reset();
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

}

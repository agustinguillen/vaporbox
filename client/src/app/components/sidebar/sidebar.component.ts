import { Component, OnInit, EventEmitter, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { PublicationService } from '../../services/publication.service';
import { Publication } from '../../models/publication';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { GLOBAL } from 'src/app/services/api';

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

export class SidebarComponent implements OnInit, AfterViewInit{
  public identity;
  public token;
  public stats;
  public status:string;
  public publication:Publication;
  public filesToUpload: Array<File>;
  public showNewPublication:boolean;
  public loading:boolean;
  public url: string;

  private _listener:any;

  @Output() sent = new EventEmitter();
  @ViewChild('fileInput')
  fileInputVariable: ElementRef;

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
    this.publication = new Publication( '', null, '', '', this.identity._id, [], [] );
    this.showNewPublication = false;
    this.loading = false;
    this.url = GLOBAL.url;
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (window.addEventListener) {
      window.addEventListener("storage", this._listener, false);
      this._listener = () => {
        this.getCounters();
     }
    }
  }

  onSubmit(form, event){
    this.loading = true
    if( (this.publication.text != null) || this.fileInputVariable.nativeElement.value != '' ){
      this._publicationService.addPublication(this.token, this.publication).subscribe(
        response => {
          if(response.publication){
            
            if(this.filesToUpload && this.filesToUpload.length){
              //subir imagen
              this._uploadService.makeFileRequest(this.url + 'upload-image-pub/' + response.publication._id, [], this.filesToUpload, this.token, 'image')
                                  .then((result:any) => {
                                      this.status = 'success';
                                      this.stats = this._userService.getStats();
                                      form.reset();
                                      this.resetFileInput();
                                      this._router.navigate(['/timeline']);
                                      this.sent.emit({sent: 'true'});
                                  });
                                  this.loading = false
            }else{
              this.status = 'success';
              form.reset();
              this.resetFileInput();
              this.getCounters();
              this._router.navigate(['/timeline']);
              this.sent.emit({sent: 'true'});
              this.loading = false
            }
            
          }else{
            this.status = 'error';
            this.loading = false
          }
        },
        error => {
          let errorMessage = <any>error;
          console.log(errorMessage);
          this.loading = false
          if(errorMessage != null){
            this.status = 'error';
          }
        });
    }
    else{
      this.status = 'error';
      this.loading = false
    }
  }

  fileChangeEvent(fileInput: any){
    console.log('files', fileInput.target.files)
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log('filesTo', this.filesToUpload)
  }

  showForm(event){
    if(this.showNewPublication === true){
      this.showNewPublication = false;
    }else{
      this.showNewPublication = true;
    }
  }

  getCounters(){
    this._userService.getCounters().subscribe(
      response => {
        localStorage.setItem('stats', JSON.stringify(response));
        this.status = 'success'; 
        this._router.navigate(['/timeline']);
        this.stats = this._userService.getStats();
        
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  resetFileInput() {
    this.fileInputVariable.nativeElement.value = '';
  }

}

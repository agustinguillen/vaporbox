import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { UploadService } from '../../services/upload.service';
import { UserService } from '../../services/user.service';
import { PublicationService } from '../../services/publication.service';
import { NotificationService } from '../../services/notification.service';
import { Publication } from '../../models/publication';
import { User } from 'src/app/models/user';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-saved-publications',
  templateUrl: './saved-publications.component.html',
  styleUrls: ['./saved-publications.component.scss'],
  providers: [ UserService, UploadService, PublicationService, NotificationService ]
})
export class SavedPublicationsComponent implements OnInit {
  private socket = io("ws://localhost:3000");
  public identity;
  public token;
  public url: string;
  public status: string;
  public statusSaved: boolean;
  public statusLiked: boolean;
  public page;
  public total;
  public pages;
  public itemsPerPage;
  public isDisabled: boolean;
  public showMessageSaved: boolean;
  public savedPublications: Publication[];
  @Input() user:string;
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _publicationService: PublicationService,
    private _notificationService: NotificationService
  ) {  
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.page = 1;

    this.getSavedPublications(this.identity._id, this.page);
   }

  ngOnInit(): void {
    
  }

  getSavedPublications(userId, page, adding = false){
    this._publicationService.getSavedPublications(userId, page).subscribe(
      response => {
        if(response.saved_publications){
          this.total = response.total_items;
          this.pages = response.pages;
          this.itemsPerPage = response.items_per_page;
          this.savedPublications = response.saved_publications;
          console.log(response.saved_publications);

          if(!adding){
            this.savedPublications = response.saved_publications;
          }else{
            let arrayA = this.savedPublications;
            let arrayB = response.saved_publications;

            this.savedPublications = arrayA.concat(arrayB);
          }
          
        }else{
          this.status = 'error';
        }
      },
      error => {
        let errorMessage = <any>error;
          console.log(errorMessage);

          if(errorMessage != null){
            this.status = "error";
          }
      }
    )
  }
  
  public noMore = false;
  viewMore(){
     this.page += 1;
     if(this.page == this.pages){
         this.noMore = true;
     }
     this.getSavedPublications(this.identity._id, this.page, true);
  }

  savePublication(publication){

    if(!publication.saves.includes(this.identity._id)){
      this.showMessageSaved = true;
      setTimeout(()=>{ this.showMessageSaved = false }, 3000)
    }

    this._publicationService.savePublication(publication).subscribe(
      response => {
        if(response && response.message === "Saved"){
          this.statusSaved = true;
          this.isDisabled = true;
          this.getSavedPublications(this.user, this.page);

        }
        else if(response && response.message === "Unsaved"){
          this.statusSaved = false;
          this.isDisabled = true;
          this.getSavedPublications(this.user, this.page);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  
  likePublication(publication){

    this._publicationService.likePublication(publication).subscribe(
      response => {
        if(response && response.message === "Like"){
          console.log(response);
          this.statusLiked = true;
          this.isDisabled = true;
          this.getSavedPublications(this.user, this.page);
          this.saveNotification(publication);
        }
        else if(response && response.message === "Dislike"){
          console.log(response);
          this.statusLiked = false;
          this.isDisabled = true;
          this.getSavedPublications(this.user, this.page);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  saveNotification(publication){
    this._notificationService.saveNotification(this.token, publication, 'like-publication').subscribe(
      response => {
        console.log(response);
        this.socket.emit("notificationPublication", response);
      },
      error => {
        console.log(<any>error);
      }
    )
  }


}
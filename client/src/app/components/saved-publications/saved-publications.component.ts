import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { UploadService } from '../../services/upload.service';
import { UserService } from '../../services/user.service';
import { PublicationService } from '../../services/publication.service';
import { Publication } from '../../models/publication';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-saved-publications',
  templateUrl: './saved-publications.component.html',
  styleUrls: ['./saved-publications.component.scss'],
  providers: [ UserService, UploadService, PublicationService ]
})
export class SavedPublicationsComponent implements OnInit {
  public identity;
  public token;
  public url: string;
  public status: string;
  public page;
  public total;
  public pages;
  public itemsPerPage;
  public savedPublications: Publication[];

  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _publicationService: PublicationService
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


}
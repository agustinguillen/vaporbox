import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from '../../services/upload.service';
import { UserService } from '../../services/user.service';
import { PublicationService } from '../../services/publication.service';
import { NotificationService } from '../../services/notification.service';
import { Publication } from '../../models/publication';
import { io } from 'socket.io-client';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
  ],
  providers: [UserService, UploadService, PublicationService, NotificationService]
})
export class TimelineComponent implements OnInit {
  private socket = io("ws://vaporbox.herokuapp.com:80");
  public identity;
  public token;
  public status: string;
  public stats;
  public statusSaved: boolean;
  public statusLiked: boolean;
  public page;
  public total;
  public pages;
  public itemsPerPage;
  public publications: Publication[];
  public isDisabled: boolean;
  public showMessageSaved: boolean;
  public loading: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _publicationService: PublicationService,
    private _notificationService: NotificationService
  ) {
    this.loading = true;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.page = 1;
    this.isDisabled = false;
    this.showMessageSaved = false;
  }

  ngOnInit(): void {
      this.getPublications(this.page);
  }

  getPublications(page?, adding = false) {
    this._publicationService.getPublications(this.token, page).subscribe(
      response => {
        if (response.publications) {
          this.total = response.total_items;
          this.pages = response.pages;
          this.itemsPerPage = response.items_per_page;
          this.loading = false;
          if (!adding) {
            this.publications = response.publications;
          } else {
            let arrayA = this.publications;
            let arrayB = response.publications;

            this.publications = arrayA.concat(arrayB);
          }
        } else {
          this.status = 'error';
          this.loading = false;
        }
      },
      error => {
        let errorMessage = <any>error;
        console.log(errorMessage);

        if (errorMessage != null) {
          this.status = "error";
        }
      }
    )
  }

  public noMore = false;
  viewMore() {
    this.page += 1;
    if (this.page == this.pages) {
      this.noMore = true;
    }
    this.getPublications(this.page, true);
  }

  refresh(event = null) {
    this.page = 1
    this.isDisabled = false;
    this.getPublications(this.page);
  }

  deletePublication(id) {
    this._publicationService.deletePublication(this.token, id).subscribe(
      response => {
        this.isDisabled = false;
        this.getCounters();
        this.refresh();
        this.deleteNotification(id);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  savePublication(publication) {

    if (!publication.saves.includes(this.identity._id)) {
      this.showMessageSaved = true;
      setTimeout(() => { this.showMessageSaved = false }, 3000)
    }

    this._publicationService.savePublication(publication).subscribe(
      response => {
        if (response && response.message === "Saved") {
          this.statusSaved = true;
          this.isDisabled = true;
          this.getPublications(this.page);
        }
        else if (response && response.message === "Unsaved") {
          this.statusSaved = false;
          this.isDisabled = true;
          this.getPublications(this.page);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  likePublication(publication) {
    this._publicationService.likePublication(publication).subscribe(
      response => {
        if (response && response.message === "Like") {
          this.statusLiked = true;
          this.isDisabled = true;
          this.getPublications(publication);
          this.saveNotification(publication);
        }
        else if (response && response.message === "Dislike") {
          this.statusLiked = false;
          this.isDisabled = true;
          this.getPublications(publication);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getCounters() {
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

  saveNotification(publication) {
    this._notificationService.saveNotification(this.token, publication, 'like-publication').subscribe(
      response => {
        this.socket.emit("notificationPublication", response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteNotification(id) {
    this._notificationService.deleteNotification(this.token, id).subscribe(
      response => { },
      error => {
        console.log(<any>error);
      }
    )
  }


}

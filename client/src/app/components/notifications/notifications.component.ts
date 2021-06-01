import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { PublicationService } from '../../services/publication.service';
import { NotificationService } from 'src/app/services/notification.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
   ],
  providers: [ UserService, PublicationService, NotificationService ]
})
export class NotificationsComponent implements OnInit {
  private socket = io("ws://localhost:3000");
  public identity;
  public token;
  public page;
  public url: string;
  public notifications: Notification[];
  

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
  }
  
  ngOnInit(): void {
    this.getNotifications(this.token, this.page);
    this.socket.on("newNotification", newNotification =>{
        this.getNotifications(this.token, this.page);    
  });
  }

  getNotifications(token, page){
    this._notificationService.getNotifications(token, page).subscribe(
      response => {
        this.notifications = response.notifications;
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  
  
  

}

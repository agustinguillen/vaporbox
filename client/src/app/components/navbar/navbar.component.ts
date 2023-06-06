import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { MessageService } from '../../services/message.service';
import { io } from 'socket.io-client';
import { Observable} from 'rxjs';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ MessageService ]
})
export class NavbarComponent implements OnInit{
  private socket = io("wss://vaporbox.onrender.com:8080");
  public identity;
  public token;
  public newNotifications$: Observable<boolean>;
  public myNotifications;
  public unviewedMessages: Message[];

  constructor(  public user: UserService,
                private _notificationService: NotificationService,
                private _messageService: MessageService,
                private _route: ActivatedRoute,
                private _router: Router
              ) { 
                  this.identity = this.user.getIdentity();
                  this.unviewedMessages = [];
                  this.token = user.getToken();
                  this.checkIfNewNotifications();
                  this.checkUnviewedMessages();                 
                
              }
              
  ngOnInit(): void{
      this.sockets();
  }

  sockets(){
    this.socket.emit("addUser", this.identity._id);
    this.socket.on("newNotification", newNotification =>{
      this.checkIfNewNotifications();
    });
    this.socket.on("getMessage", msg =>{
      console.log(msg)
      this.checkUnviewedMessages();
    })   
  }

  logout(){
      localStorage.clear();
      localStorage['firstTimeLoad']='FALSE';    
      this.identity = null;
      this._router.navigate(['/login']);  
  }

  toTop(event){
    window.scroll(0,0);
  }

  seeNotifications(){
    new Observable(observer=>observer.next(false));
    this.setViewedNotifications(this.token, this.identity._id);
  }

  checkIfNewNotifications(){
     
    this._notificationService.getNotifications(this.token).subscribe(
      response => {
        this.myNotifications = response.notifications.filter(notification => notification.viewed == false).length;
        if(this.myNotifications > 0){
          this.newNotifications$ = new Observable(observer=>observer.next(true));
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  setViewedNotifications(token, id){
    this._notificationService.setViewedNotifications(token, id).subscribe(
      response =>{
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  checkUnviewedMessages(){
    this._messageService.getUnviewedMessages(this.token).subscribe(
      response => {
        this.unviewedMessages = response.unviewed;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}

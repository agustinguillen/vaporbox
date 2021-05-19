import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { Message } from '../../models/message';
import { UserService } from '../../services/user.service';
import { FollowService } from '../../services/follow.service';
import { MessageService } from '../../services/message.service'
import { GLOBAL } from '../../services/global';
import { io } from 'socket.io-client';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
   ],
  providers: [ UserService, FollowService, MessageService ]
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatScreen') private myScrollContainer: ElementRef;
  public url:string;
  private socket = io("ws://localhost:3000");
  public user:User;
  public followers;
  public token;
  public identity;
  public eventName:string;
  public messages: Message[];
  public message: Message;
  public chatname;
  public onlineUsers;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _followService:FollowService,
    private _messageService:MessageService
  ) { 
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.getFollows(this.token);
    this.message = new Message('','','','',this.identity._id,'');
    this.onlineUsers = [];
  
  }

  ngOnInit(): void {
    this.socket.on("getUsers", users=>{
       this.onlineUsers = users.map(user => user.userId);
    });

    this.socket.on("getMessage", msg =>{
        this.getMessages();
    });

    this.scrollToBottom();
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }

  onSubmit(form){
    this._messageService.addMessage(this.token, this.message).subscribe(
      response => {
        console.log(response.message);
            
        this.socket.emit("sendMessage", response.message);
      },
      error =>{
        console.log(<any>error);
      }
    )
    this.getMessages();
    form.reset();
  }

  getFollows(token:any){
    this._followService.getFollowers(token).subscribe(
      response => {
        if(response.follows){
          this.followers = response.follows;
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  setReceiver(id:any, name:any){
    this.message.receiver = id;
    this.chatname = name;
    //Mensajes del chat entre usuario y 'receiver'
    this.getMessages();
    
  }
  
  getMessages(){ 
    this._messageService.getMessages(this.token, this.message.receiver).subscribe(
    response => {
      this.messages = response.messages;
    },
    error =>{
      console.log(<any>error);
    }
  )
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  
}

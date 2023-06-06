import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { Message } from '../../models/message';
import { UserService } from '../../services/user.service';
import { FollowService } from '../../services/follow.service';
import { MessageService } from '../../services/message.service';
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
  private socket = io("wss://vaporbox.onrender.com");
  public user:User;
  public followers;
  public token;
  public identity;
  public eventName:string;
  public messages: Message[];
  public unviewedMessages: Message[];
  public message: Message;
  public chatname;
  public onlineUsers;
  public loading: boolean;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _followService:FollowService,
    private _messageService:MessageService
  ) { 
    this.loading = true;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.getFollows(this.token);
    this.message = new Message('','','','',this.identity._id,'');
    this.onlineUsers = [];
  }

  ngOnInit(): void {
      this.checkUnviewedMessages();
      this.sockets();
      this.scrollToBottom();
    }
    
    ngAfterViewChecked() {        
      this.scrollToBottom();        
    }
    
  sockets(){  
      this.socket.emit("addUser", this.identity._id);
      this.socket.on("getUsers", users=>{
          this.onlineUsers = users.map(user => user.userId);
      });
      this.socket.on("getMessage", msg =>{
          console.log(msg)
          this.getMessages();
          this.checkUnviewedMessages();
      });
  }

  onSubmit(form){
    this._messageService.addMessage(this.token, this.message).subscribe(
      response => {         
        this.socket.emit("sendMessage", response.message);
        this.getMessages();
      },
      error =>{
        console.log(<any>error);
      }
    )
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
    this.setViewedMessages(); 
    this.checkUnviewedMessages();  
  }
  
  getMessages(){ 
    this._messageService.getMessages(this.token, this.message.receiver).subscribe(
    response => {
      this.messages = response.messages;
      this.loading = false;
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

  checkUnviewedMessages(){
    this._messageService.getUnviewedMessages(this.token).subscribe(
      response => {
        this.unviewedMessages = response.unviewed.map(msg => msg.emitter).sort();
        this.loading = false;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  setViewedMessages(){
    this._messageService.setViewedMessages(this.token, this.message).subscribe(
      response => {
      },
      error => {
        console.log(<any>error);
      }
    )
  }
 
}

import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message } from '../../../models/message';
import { MessageService } from '../../../services/message.service';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Follow } from '../../../models/follow';
import { FollowService } from '../../../services/follow.service';
import { GLOBAL } from '../../../services/global';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss'],
  providers: [ FollowService, UserService, MessageService ]
})
export class ReceivedComponent implements OnInit {
  public identity;
  public token;
  public url: string;
  public status: string;
  public messages: Message[];
  public page;
  public pages;
  public next_page;
  public prev_page;
  public total;

  
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _followService:FollowService,
    private _userService:UserService,
    private _messageService:MessageService
  ) { 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
   }

  ngOnInit(): void {
    this.actualPage();
  }

  actualPage(){
    this._route.params.subscribe(params=>{
      let page = params['page'];
      this.page = page;

      if(!params['page'] || page == undefined){
        page = 1;
      }

      if(!page){
        page = 1
      }else{
        
        this.next_page = parseInt(page) + 1;
        this.prev_page = parseInt(page) - 1;
        if(this.prev_page <= 0){
            this.prev_page = 1;
        }
      }
      
      this.getMessages(this.token, this.page);
    });
  }

  getMessages(token, page){
    this._messageService.getMyMessages(token, page).subscribe(
      response => {
        if(!response.messages){
          
        }else{
          console.log(response.messages)
          this.messages = response.messages;
          this.total = response.total;
          this.pages = response.pages;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
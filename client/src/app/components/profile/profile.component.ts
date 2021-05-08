import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { Follow } from '../../models/follow';
import { UserService } from '../../services/user.service';
import { FollowService } from '../../services/follow.service';
import { GLOBAL } from '../../services/global';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
   ],
  providers: [ UserService, FollowService ]
})
export class ProfileComponent implements OnInit {
  public user: User;
  public status:string;
  public identity;
  public token;
  public stats;
  public url;
  public following;
  public followed;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _followService:FollowService
  ) { 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.followed = false;
    this.following = false;
   }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(){
    this._route.params.subscribe( params =>{
      let id = params[ 'id' ];

      this.getUser(id);
      this.getCounters(id);
    });
  }

  getUser(id){
    this._userService.getUser(id).subscribe(
      response => { 
        if(response.user){
          this.user = response.user;

          if(response && response.following && response.following._id){
            this.following = true;
          }else{
            this.following = false;
          }

          if(response && response.followed && response.followed._id){
            this.followed = true;
          }else{
            this.followed = false;
          }

        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
        this._router.navigate([ '/profile', this.identity._id ]);
      }
    )
  }

  getCounters(id){
    this._userService.getCounters(id).subscribe(
      response => {
        this.stats = response;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  followUser(followed){
    let follow = new Follow('', this.identity._id, followed);

    this._followService.addFollow(this.token, follow).subscribe(
      response => {
        this.following = true;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  unfollowUser(followed){
    this._followService.deleteFollow(this.token, followed).subscribe(
      response => {
        this.following = false;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  public followUserOver;
  mouseEnter(user_id){
    this.followUserOver = user_id;
  }

  mouseLeave(){
    this.followUserOver = 0;
  }

}

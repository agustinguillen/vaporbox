import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { Follow } from '../../models/follow';
import { UserService } from '../../services/user.service';
import { FollowService } from '../../services/follow.service';
import { NotificationService } from 'src/app/services/notification.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
   ],
  providers: [ UserService, FollowService, NotificationService ]
})
export class FollowingComponent implements OnInit {
  public identity;
  public token;
  public user:User;
  public page;
  public next_page;
  public prev_page;
  public total;
  public pages;
  public users:User[];
  public status:string;
  public follows;
  public following;
  public followMouseOver;
  public userPageId;
  public mobile:boolean;



  constructor(  private _route:ActivatedRoute,
                private _router:Router,
                private _userService:UserService,
                private _followService:FollowService,
                private _notificationService:NotificationService ) 
    { 
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
     }

  ngOnInit(): void {
    this.actualPage();
    if (window.screen.width <= 992) { 
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

  actualPage(){
    this._route.params.subscribe(params=>{
      let user_id = params['id'];
      this.userPageId = user_id;
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
      
      this.getUser(user_id, page);
    });
  }

  getFollows( user_id, page ){
    this._followService.getFollowing(this.token, user_id, page).subscribe(
      response => {
        if(!response.follows){
          this.status = "error";
        }else{
          this.total = response.total;
          this.following = response.follows;
          this.pages = response.pages;
          this.follows = response.users_following;

          

          if(page > this.pages){
            this._router.navigate(['/users/', 1])
          }
        }
      },
      error => {
        let errorMessage = <any>error;
        console.log(errorMessage);

        if(errorMessage != null){
          this.status = "error";
        }
      }
    );
  }

  getUser(user_id, page){
    this._userService.getUser(user_id).subscribe(
      response => {
        if(response.user){
          this.user = response.user;
          //Devolver listado de usuarios
          this.getFollows( user_id, page );
        }else{
          this._router.navigate(['/home']);
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

  mouseEnter(user_id){
      this.followMouseOver = user_id;
  }

  mouseLeave(user_id){
    this.followMouseOver = 0;
  }

  followUser(followed, user){
    let follow = new Follow('', this.identity._id, followed);

    this._followService.addFollow(this.token, follow).subscribe(
        response=>{
          if(response.followStored){
            this.status = 'error'
          }else{
            this.status = 'success';
            this.follows.push(followed);
          }
          localStorage.removeItem('stats');
          this.getCounters();
          this._userService.getStats();
          this.saveNotification(user);
        },
        error=>{
          let errorMessage = <any>error;
          console.log(errorMessage);

          if(errorMessage != null){
            this.status = "error";
          }
        }
    )
  }

  unfollowUser(followed){
    this._followService.deleteFollow(this.token, followed).subscribe(
        response=>{
          let search = this.follows.indexOf(followed);
          if(search != -1){
            this.follows.splice(search, 1);
          }
          localStorage.removeItem('stats');
          this.getCounters();
          this._userService.getStats();
        },
        error=>{
          let errorMessage = <any>error;
          console.log(errorMessage);

          if(errorMessage != null){
            this.status = "error";
          }
        }
    );
  }

  getCounters(){
    this._userService.getCounters().subscribe(
        response =>{
            //Guardamos en stats la respuesta JSON
            localStorage.setItem('stats', JSON.stringify(response));
            this.status = 'success';
 
        }, 
        error=>{
            console.log(error);
        }
        
    )
  }

  saveNotification(follower){
    this._notificationService.saveNotification(this.token, follower, 'new-follow').subscribe(
      response => {
      },
      error => {
        console.log(<any>error);
      }
    );
  }


}

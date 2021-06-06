import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FollowService{

    constructor(private _http: HttpClient){
    }

    addFollow(token, follow):Observable<any>{
        let params = JSON.stringify(follow);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.post('api/follow', params, {headers: headers});
    }

    deleteFollow(token, id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.delete('api/follow/' + id, {headers: headers});
    }

    getFollowing(token, userId = null, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        let url = 'api/following';
        if(userId != null){
            url = 'api/following/' + userId + '/' + page;
        }
        
        return this._http.get(url, {headers: headers});
    }

    getFollowers(token, userId = null, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        let url = 'api/followed';
        if(userId != null){
            url = 'api/followed/' + userId + '/' + page;
        }
        
        return this._http.get(url, {headers: headers});
    }

    getMyFollows(token):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        return this._http.get('api/get-my-follows/true', {headers: headers});                               
    }
}
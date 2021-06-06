import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()

export class UserService{
    public identity;
    public token;
    public stats;

    constructor( public _http: HttpClient ){
    }

    register(user: User): Observable<any>{
       let params = JSON.stringify(user);
       let headers = new HttpHeaders().set('Content-Type', 'application/json');

       return this._http.post('api/register', params, {headers: headers})
    }

    signup(user: any, gettoken = null):Observable<any>{
           if(gettoken != null){
               user.gettoken = gettoken;
           } 

           let params = JSON.stringify(user);
           let headers = new HttpHeaders().set('Content-Type', 'application/json')

           return this._http.post('api/login', params, {headers: headers})

    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        
        if(identity != undefined){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
    }

    getToken(){
        let token = JSON.parse(localStorage.getItem('token'));

        if(token != undefined){
            this.token = token;
        }else{
            this.token = null;
        }
        
        return this.token;
    }

    getStats(){
        let stats = JSON.parse(localStorage.getItem('stats'));

        if(stats != "undefined"){
            this.stats = stats;
        }else{
            this.stats = null;
        }

        return this.stats
    }

    getCounters(userId = null):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());

        if(userId != null){
            return this._http.get('api/counters/'+userId, {headers: headers});
        }else{
            return this._http.get('api/counters/', {headers: headers});
        }
    }

    updateUser(user:User):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', this.getToken());
        
        return this._http.put('api/update-user/'+user._id, params, {headers: headers});

    }

    getUsers( page = null ):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        return this._http.get('api/users/'+page, {headers:headers});
    }

    getUser( id:any ):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        return this._http.get('api/user/'+id, {headers:headers});
    }

    deleteUser( id:any ):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        return this._http.delete('api/user/'+ id, {headers:headers});
    }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class NotificationService{
    public url: string;
    public token;

    constructor( private _http: HttpClient ){
        this.url = GLOBAL.url;
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

    saveNotification(token, data, type):Observable<any>{
        let params = JSON.stringify(data);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.post(this.url + 'save-notification/' + type , params, {headers: headers})
                                     
    }
    
    getNotifications(token, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.get(this.url + 'get-notifications/' + page , {headers: headers})
                                     
    }

    setViewedNotifications(token, id){
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', token);
        
        return this._http.post(this.url + 'set-viewed-notifications/'+ id, {headers: headers})
    }

    deleteNotification(token, id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.delete(this.url + 'delete-notification/' + id, {headers: headers})
    }

}
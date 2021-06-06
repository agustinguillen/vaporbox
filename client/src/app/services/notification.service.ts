import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService{
    public token;

    constructor( private _http: HttpClient ){
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
        
        return this._http.post('api/save-notification/' + type , params, {headers: headers})
                                     
    }
    
    getNotifications(token, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.get('api/get-notifications/' + page , {headers: headers})
                                     
    }

    setViewedNotifications(token, id){
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', token);
        
        return this._http.post('api/set-viewed-notifications/'+ id, {headers: headers})
    }

    deleteNotification(token, id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.delete('api/delete-notification/' + id, {headers: headers})
    }

}
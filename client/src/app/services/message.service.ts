import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class MessageService{
    public url: string;
    

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    addMessage(token, message):Observable<any>{
        let params = JSON.stringify(message);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', token);
        
        return this._http.post(this.url + 'message/', params, {headers: headers});
    }

    getMessages(token, id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', token);
        
        return this._http.get(this.url + 'messages/' + id, {headers: headers});
    }

    getUnviewedMessages(token):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', token);
        
        return this._http.get(this.url + 'unviewed-messages/', {headers: headers});
    }

    setViewedMessages(token, message):Observable<any>{
        let params = JSON.stringify(message);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', token);
        
        return this._http.post(this.url + 'set-viewed-messages/', params, {headers: headers});
    }

    


}
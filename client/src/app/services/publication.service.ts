import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../models/publication';
import { GLOBAL } from './api';

@Injectable()
export class PublicationService{
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

    addPublication(token, publication):Observable<any>{
        let params = JSON.stringify(publication);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.post(this.url + 'publication', params, {headers: headers})
                                     
    }

    getPublications(token, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.get(this.url + 'publications/' + page, {headers: headers})
    }

    getPublication(publication: Publication):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        
        return this._http.get(this.url + 'publication/' + publication._id, {headers: headers})
    }

    getPublicationsUser(token, user_id, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.get(this.url + 'publications-user/' + user_id + '/' + page, {headers: headers})
    }

    deletePublication(token, id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.delete(this.url + 'publication/' + id, {headers: headers})
    }

    savePublication(publication: Publication):Observable<any>{
        let params = JSON.stringify(publication);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        
        return this._http.put(this.url + 'saved-publication/' + publication._id, params, {headers: headers})
    }

    getSavedPublications(id, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        
        return this._http.get(this.url + 'get-saved-publications/' + id + '/' + page, {headers: headers})
    }

    likePublication(publication: Publication):Observable<any>{
        let params = JSON.stringify(publication);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        
        return this._http.put(this.url + 'like-publication/' + publication._id, params, {headers: headers})
    }

}
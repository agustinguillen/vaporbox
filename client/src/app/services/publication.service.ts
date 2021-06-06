import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../models/publication';

@Injectable()
export class PublicationService{
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

    addPublication(token, publication):Observable<any>{
        let params = JSON.stringify(publication);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.post('api/publication', params, {headers: headers})
                                     
    }

    getPublications(token, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.get('api/publications/' + page, {headers: headers})
    }

    getPublication(publication: Publication):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        
        return this._http.get('api/publication/' + publication._id, {headers: headers})
    }

    getPublicationsUser(token, user_id, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.get('api/publications-user/' + user_id + '/' + page, {headers: headers})
    }

    deletePublication(token, id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);
        
        return this._http.delete('api/publication/' + id, {headers: headers})
    }

    savePublication(publication: Publication):Observable<any>{
        let params = JSON.stringify(publication);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        
        return this._http.put('api/saved-publication/' + publication._id, params, {headers: headers})
    }

    getSavedPublications(id, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        
        return this._http.get('api/get-saved-publications/' + id + '/' + page, {headers: headers})
    }

    likePublication(publication: Publication):Observable<any>{
        let params = JSON.stringify(publication);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', this.getToken());
        
        return this._http.put('api/like-publication/' + publication._id, params, {headers: headers})
    }

}
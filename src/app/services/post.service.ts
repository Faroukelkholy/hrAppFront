import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendURL } from '../../utils/backendURL';
import { catchError } from 'rxjs/operators';
import { handleError } from './handleError';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) {
  }

  getNews(access_token) {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${access_token}`);
    return this.http.get(BackendURL.posts + '?type=news', { headers: headers }).pipe(
      catchError(handleError)
    );
  }

  getBenefits(access_token) {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${access_token}`);
    return this.http.get(BackendURL.posts + '?type=benefit', { headers: headers }).pipe(
      catchError(handleError)
    );
  }

  savePost(post,type, user, access_token) {
    post.type = type;
    post.hr = user;
    let body = {
      post: post
    };
    let headers = new HttpHeaders().set('Authorization', `Bearer ${access_token}`).set('Content-type', 'application/json');
    return this.http.post(BackendURL.posts, body, { headers: headers }).pipe(
      catchError(handleError)
    );
  }

}

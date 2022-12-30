import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './shop';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _HttpClient: HttpClient,
    private _Router: Router
    ) {

  }
  register(data:User){
    return this._HttpClient.post<User>(environment.urlRegister,data);
  }
  login(data:User){
    return this._HttpClient.post<{access_token: string}>(environment.urlLogin ,data);
  }
  logout(){
    localStorage.removeItem('access_token');
  }
  checkAuth():any{
    let token = localStorage.getItem('access_token');
    return token;
  }
  profile():Observable<User>{
    return this._HttpClient.get<User>(environment.urlProfile);
  }
}

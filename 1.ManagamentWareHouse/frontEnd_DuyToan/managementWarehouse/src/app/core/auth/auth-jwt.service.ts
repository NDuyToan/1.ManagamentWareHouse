import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router} from '@angular/router';

import { Login } from './../login/login.model';
import { LoginModalService } from './../login/login-modal.service';
import { KEY_TOKEN} from './../../app.const';
import { URL_LOGIN} from './../../app.const';
//const KEY_TOKEN = "token"

@Injectable({ providedIn: 'root' })
 export class AuthServerProvider {
   //private urlLogin: string = 'http://localhost:8080/api/authenticate';
  constructor(
    private http: HttpClient,
    private router: Router,
    private loginModalService: LoginModalService
  ) {}

  login( data: Login): Observable<any> {
    return this.http.post(URL_LOGIN, data)
  }
  logout() {
    this.router.navigateByUrl('');
    return localStorage.removeItem(KEY_TOKEN);
  }

  setLocal(token: string){
    localStorage.setItem(KEY_TOKEN, token);
    if (localStorage.hasOwnProperty(KEY_TOKEN)){
      return true;
    } else {
      return false;
    }
  }

  getLocal(): any {
    if (localStorage.hasOwnProperty(KEY_TOKEN)) {
    return localStorage.getItem(KEY_TOKEN);
  } else {
    return false;
  }

 }
 checkLogin() {
  if (localStorage.hasOwnProperty(KEY_TOKEN)) {
    return true;
  } else {
    this.loginModalService.open();
    return false;
  }
 }
}


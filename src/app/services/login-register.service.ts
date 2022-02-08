import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../shared-class&types/LoginForm';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor( private http :HttpClient) { }

  _url='https://localhost:3000/login';
  
  loginSer(login:LoginForm){
    return this.http.post(this._url,login)
  }

  regUr='https://localhost:3000/register/'
  RegisterSer(login:LoginForm){
    return this.http.post(this.regUr,login)
  }
}

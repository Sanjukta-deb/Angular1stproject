import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../class/registration';
import { Login } from '../class/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userdata:any[];
  registration_url="https://api09.herokuapp.com/register";
  login_url="https://api09.herokuapp.com/login";
  constructor(private http:HttpClient ) { }

  RegistrationData(userdata): Observable<Registration[]> {
    return this.http.post<Registration[]>(this.registration_url,userdata)
  }

  LoginData(userdata): Observable<Login[]> {
    return this.http.post<Login[]>(this.login_url,userdata)
  }
}

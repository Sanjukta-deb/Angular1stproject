import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  setIntialToken(token:string){
    window.sessionStorage.setItem('logintoken', token);
  }

  getToken(){
    window.sessionStorage.getItem('logintoken');
  }

  deleteToken(){
    window.sessionStorage.clear();
  }
  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }

  isLoggedIn = false;

  user = {
    name: 'Admin'
  }

  login() {
    this.isLoggedIn = true;
    
  }

  logout() {
    this.isLoggedIn = false;
  }
  
}

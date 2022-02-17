import { Component } from '@angular/core';
import { UserLoginService } from './user-login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userLogService: UserLoginService) {}
  
  welcome = '';
  isOn = false;

  login() {
    this.isOn = true;
    this.userLogService.login();
    this.welcome = `Welcome ${this.userLogService.user.name}`;
  }

  logout() {
    this.isOn = false;
    this.userLogService.logout();
    this.welcome = 'Please log in...';
  }
  
  get message() { return `You are <== ${this.isOn ? 'Authorized' : 'Not authorized'} ==>`; }

}

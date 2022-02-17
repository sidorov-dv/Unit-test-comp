import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserLoginService } from './user-login-service';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User from MockUserService'};
  login() {
    console.log('Login');
  }  
  logout() {
    console.log('Logout');
  }
}

let comp: any;
let userLogService: any;

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: UserLoginService, useClass: MockUserService }
      ]
    });
    comp = TestBed.inject(AppComponent);
    userLogService = TestBed.inject(UserLoginService);
  });

  it('should not have #welcome message after construction', () => {
    expect(comp.welcome).toBe('');
  });

  it('should var #isOn = false after construction', () => {
    expect(comp.isOn).toBe(false);
  });
  
  it('should #welcome logged in user after calls login()', () => {
    comp.login();
    expect(comp.isOn).toBe(true);
    expect(userLogService.isLoggedIn).toBe(true);
    expect(comp.welcome).toContain(`Welcome Test User from MockUserService`);
  });

  it('should #welcome logged out user after calls logout()', () => {
    comp.logout();
    expect(comp.isOn).toBe(false);
    expect(userLogService.isLoggedIn).toBe(true);
    expect(comp.welcome).toMatch(/Please log in.../ig);
  });
});





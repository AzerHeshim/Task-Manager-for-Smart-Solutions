import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  showLogin: boolean = true;
  showSignup: boolean = false;
  toggleSignup() {
    this.showLogin = !this.showLogin;
    this.showSignup = !this.showSignup;
  }
}

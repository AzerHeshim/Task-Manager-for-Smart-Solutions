import { Injectable } from '@angular/core';
import { users } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email: string, password: string): { loggedIn: boolean; role: string } {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      return { loggedIn: true, role: user.role };
    }
    return { loggedIn: false, role: '' };
  }
}

import { Injectable } from '@angular/core';
import { users, tasks} from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private userData: any;

  registerUser(newUser: any) {
    users.push(newUser);
    console.log(users)
  }
  getUsers(){
    return users;
  }
  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
}

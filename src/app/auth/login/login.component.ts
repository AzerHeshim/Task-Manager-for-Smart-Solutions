import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {users} from "../../../mock-data";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  loginForm: FormGroup;
  notAUser: boolean = false;
  passwordVisible:boolean = false;
  constructor(private fb: FormBuilder,
              private loginService: AuthService,
              private router: Router,
              private message: NzMessageService,
              private dataService: DataService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {

  }
  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const userData = users.find((user) => user.email == email);
      const { loggedIn, role } = this.loginService.login(email, password);
      if (loggedIn) {
        console.log(userData)
        localStorage.setItem('userRole', role);
        this.message.create('success', `Succesfully logged in`);
        this.loginForm.reset();
        this.dataService.setUserData(userData);
        sessionStorage.setItem('userData', JSON.stringify(userData));

        this.router.navigate(['/home/' + userData?.id]);
      } else {
        this.notAUser = true
      }
    }
  }
}

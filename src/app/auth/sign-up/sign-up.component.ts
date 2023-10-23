import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../../services/data.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";
import {users} from "../../../mock-data";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm: FormGroup;
  registrationSuccess: boolean = false;
  orgForm: FormGroup;
  passwordVisible:boolean = false;

  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private message: NzMessageService,
              private router: Router,
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.orgForm = this.fb.group({
      orgName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['']
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      const name = this.signupForm.get('name')?.value;
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;
      const highestId = Math.max(...users.map((user) => user.id));
      const newUserId = highestId + 1;
      const newUser = {
        id: newUserId,
        name: name,
        email: email,
        password: password,
        role: 'admin',
        tasks: [],
      };
      users.push(newUser);

      this.dataService.registerUser(newUser);
      this.registrationSuccess = true;
      this.message.create('success', 'Registration successful! You are now a registered admin.');

      // this.signupForm.reset();
    }
  }
  addOrganization() {
    if (this.orgForm.valid) {
      const orgName = this.orgForm.get('orgName')?.value;
      const phone = this.orgForm.get('phone')?.value;
      const address = this.orgForm.get('address')?.value;
      const email = this.signupForm.get('email')?.value;
      const userData = users.find((user) => user.email == email);
      if (userData) {
        const newOrganization = {
          name: orgName,
          phone: phone,
          address: address,
        };
        userData.organization = newOrganization;
      }
      this.dataService.setUserData(userData);
      sessionStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('userRole', 'admin');
      this.router.navigate(['/home/' + userData?.id]);
    }
  }
}

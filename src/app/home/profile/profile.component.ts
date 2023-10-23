import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../../services/data.service";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
 userData: any;
  passwordVisible:boolean = false;

  profileForm:any = FormGroup;
  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private router: Router,
              private message: NzMessageService) {}


  ngOnInit(): void {
    this.userData = this.dataService.getUserData()
    this.userData = sessionStorage.getItem('userData');

    this.profileForm = this.fb.group({
      name: [JSON.parse(this.userData)?.name, Validators.required],
      email: [JSON.parse(this.userData)?.email,  Validators.required],
      password: [JSON.parse(this.userData)?.password,    Validators.required],
    });
  }
  onSave() {
    if (this.profileForm.valid) {
      const updatedUserData = {
        ...JSON.parse(this.userData),
        ...this.profileForm.value
      };
      this.dataService.setUserData(updatedUserData);
      sessionStorage.setItem('userData', JSON.stringify(updatedUserData));
      this.message.create('success', `Succesfully updated`);
      this.router.navigate(['/home/' + updatedUserData?.id]);
    }
  }
}

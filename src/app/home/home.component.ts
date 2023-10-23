import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {FormBuilder, Validators} from "@angular/forms";
import {users} from "../../mock-data";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {ProfileComponent} from "./profile/profile.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private message: NzMessageService,
              private fb: FormBuilder,
              private modalService: NzModalService,
              private router: Router) {}
  taskForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    deadline: [''],
    status: [''],
  });
  userForm = this.fb.group({
    name: ['', Validators.required],
    email: [''],
    password: [''],
    role: ['user'],
  });
  passwordVisible:boolean = false;
  showTaskForm:boolean = false;
  showUserForm:boolean = false;
  userList: any = []
  role: any = ''
  userName: any =''
  userId: any =''
  userData: any;
  taskList:any = [];
  ngOnInit(): void {
    this.role = localStorage.getItem('userRole')
    this.userData = this.dataService.getUserData();
    this.userData = sessionStorage.getItem('userData');
    this.userName = JSON.parse(this.userData)?.name
    this.userId = JSON.parse(this.userData)?.id
    this.taskList = JSON.parse(this.userData)?.tasks
    this.userList = this.dataService.getUsers()
  }
  addTask() {
    this.showTaskForm = !this.showTaskForm;
  }
  addUser(){
    this.showUserForm = !this.showUserForm
  }
  showProfile(){
    this.modalService.create({
      nzTitle: 'Profile',
      nzContent: ProfileComponent,
      nzComponentParams: {
        userData: this.userData
      },
      nzOnOk: () =>{
        console.log(this.userData)
      }

    });
  }
  toProfile(userDataId: any){
    this.dataService.setUserData(this.userData);
    this.router.navigate([ '/home/' + userDataId + '/profile']);

  }
  submitUser(){
    if(this.userForm.valid){
      const generateId = Math.max(...users.map((user) => user.id));
      const newUserId = generateId + 1;
      const newUser = {
        ...this.userForm.value,
        id: newUserId,
      };
      this.userList.push(newUser)
      this.showUserForm = false;
      this.message.create('success', `Successfully added`);
      this.userForm.reset()
    }
  }
  submitTask() {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      this.taskList.push(newTask);
      this.showTaskForm = false;
      this.message.create('success', `Successfully added`);

      this.taskForm.reset();
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        NzFormModule,
        NzButtonModule,
        NzInputModule,
        ReactiveFormsModule,
        FormsModule,
        NzMessageModule,
        NzIconModule
    ]
})
export class AuthModule { }

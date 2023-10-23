import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import { ProfileComponent } from './profile/profile.component';
import {NzModalModule} from "ng-zorro-antd/modal";


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCollapseModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzAvatarModule,
    NzModalModule
  ]
})
export class HomeModule { }

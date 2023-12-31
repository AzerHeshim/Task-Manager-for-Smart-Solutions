import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: ':id', component: HomeComponent },
  { path: ':id/profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

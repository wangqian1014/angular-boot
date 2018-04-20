import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import {SystemRoutesModule} from "./system.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SystemRoutesModule
  ],
  declarations: [
    LoginComponent,
    UserComponent
  ]
})
export class SystemModule { }

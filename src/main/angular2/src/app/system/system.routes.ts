import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user/user.component";

export const sysRouterConfig:Routes=[
  {path:"system/user",component:UserComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(sysRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})

export class SystemRoutesModule {}

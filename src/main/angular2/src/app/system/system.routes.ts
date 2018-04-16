import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user/user.component";


export const rootRouterConfig:Routes=[
  {path:"system/user",component:UserComponent}
];
@NgModule({
  imports: [
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesModule {}

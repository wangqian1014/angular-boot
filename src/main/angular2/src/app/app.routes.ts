import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./system/login.component";
import {IndexComponent} from "./layout/index/index.component";
import {C404Component} from "./403/c404.component";

export const rootRouterConfig:Routes=[
  {path:"",component:LoginComponent},
  {path:"index",component:IndexComponent}
  /*{path:"**",component:C404Component}*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      rootRouterConfig,
      {useHash: true}// enableTracing:true表示每个导航生命周期中的事件输出到浏览器的控制台
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesModule {}

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./system/login.component";
import {AppComponent} from "./app.component";
import {IndexComponent} from "./layout/index/index.component";


export const rootRouterConfig:Routes=[
  {path:"",component:LoginComponent},
  {path:"index",component:IndexComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      rootRouterConfig,
      { enableTracing: true,useHash: true}// debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesModule {}

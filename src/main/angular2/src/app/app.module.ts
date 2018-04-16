import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SystemModule} from "./system/system.module";
import {AppRoutesModule} from "./app.routes";
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './layout/home/home.component';
import { IndexComponent } from './layout/index/index.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    SystemModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

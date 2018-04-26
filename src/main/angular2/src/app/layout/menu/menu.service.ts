import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MenuService {

  constructor(private http:HttpClient) {
  }
  getAllMenu(){
    return this.http.post('/menu/loadMenu',"").subscribe(data=>{
      console.log(data,"12345");
    });
  }
}

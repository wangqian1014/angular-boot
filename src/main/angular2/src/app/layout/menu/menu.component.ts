import {Component, Injectable, OnInit} from '@angular/core';
import {MenuService} from "./menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[MenuService]
})

export class MenuComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    console.log(this.menuService.getAllMenu());
  }

}

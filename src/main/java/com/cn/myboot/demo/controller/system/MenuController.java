package com.cn.myboot.demo.controller.system;

import com.cn.myboot.demo.domain.system.Menu;
import com.cn.myboot.demo.service.system.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MenuController {

    @Autowired
    private MenuService menuService;

    /**
     * 加载菜单
      * @return
     */
    @PostMapping(value = "menu/loadMenu")
    public List<Menu> loadAllMenu(){
        return menuService.loadMenu();
    }
}

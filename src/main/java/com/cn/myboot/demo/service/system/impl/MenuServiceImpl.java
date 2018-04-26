package com.cn.myboot.demo.service.system.impl;

import com.cn.myboot.demo.domain.system.Menu;
import com.cn.myboot.demo.repository.system.MenuRepository;
import com.cn.myboot.demo.service.system.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
/**
 * 菜单Service
 */
public class MenuServiceImpl implements MenuService {


    @Autowired
    private MenuRepository menuRepository;
    @Override
    public List<Menu> loadMenu() {
        return menuRepository.findAll();
    }
}

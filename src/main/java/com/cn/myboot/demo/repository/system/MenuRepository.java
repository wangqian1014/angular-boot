package com.cn.myboot.demo.repository.system;

import com.cn.myboot.demo.domain.system.Menu;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface MenuRepository extends Repository<Menu,Integer> {

   public List<Menu> findAll();
}

package com.cn.myboot.demo.security;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.ArrayList;
import java.util.List;


public class ShiroRealm extends AuthorizingRealm {
	
	@Autowired
	private HashedCredentialsMatcher credentialsMatcher;
    /**
     * 为当前登录的Subject授予角色和权限 (根据用户身份获取授权信息)
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals){
        //获取当前登录的用户名,等价于(String)principals.fromRealm(this.getName()).iterator().next()  
        String currentUsername = (String)super.getAvailablePrincipal(principals);
        List<String> roleList = new ArrayList<String>();
        List<String> permissionList = new ArrayList<String>();
	    //从数据库中获取当前登录用户的详细信息
        /*User user = userService.userLogin(currentUsername);*/
       /* User user =  (User)SecurityUtils.getSubject().getSession().getAttribute("currentUser");
        if(null != user){
            if(null != user.getEmployee()){
                List<Resource> resourceList = userRoleService.loadResourceByUser(user);
                //实体类User中包含有用户角色的实体类信息
                for (Resource resource : resourceList) {
                    if (null != resource) {
                        if(!StringUtils.isEmpty(resource.getResourceCode())){
                            permissionList.add(resource.getResourceCode());
                        }
                    }
                }
            }else{
                List<Resource> resourceList = resourceService.selectAll();
                for(Resource resource : resourceList){
                    if(StringUtils.isNotEmpty(resource.getResourceCode())){
                        permissionList.add(resource.getResourceCode());
                    }
                }
            }
        }else{
            throw new AuthorizationException();
        }*/
        //为当前用户设置角色和权限
        SimpleAuthorizationInfo simpleAuthorInfo = new SimpleAuthorizationInfo();
        simpleAuthorInfo.addRoles(roleList);
        simpleAuthorInfo.addStringPermissions(permissionList);
        return simpleAuthorInfo;
    }  
    /** 
     * 验证当前登录的Subject(获取身份验证信息)
     */
    @Override  
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {  
        //获取基于用户名和密码的令牌  
        //实际上这个authcToken是从LoginController里面currentUser.login(token)传过来的  
        //两个token的引用都是一样的
        UsernamePasswordToken token = (UsernamePasswordToken)authcToken;  
        System.out.println("验证当前Subject时获取到token为" + ReflectionToStringBuilder.toString(token, ToStringStyle.MULTI_LINE_STYLE));
       /* User user = userService.userLogin(token.getUsername());
        //System.out.println(new SimpleHash(credentialsMatcher.getHashAlgorithmName(), token.getCredentials(), ByteSource.Util.bytes(user.getUserName()), credentialsMatcher.getHashIterations()));
        if(null != user){  
	    	AuthenticationInfo authcInfo = new SimpleAuthenticationInfo(user.getUserName(), user.getPassword(), ByteSource.Util.bytes(user.getUserName()), getName());
	    	this.setSession("currentUser", user);  
	        return authcInfo;  
	    }*/
		return null;
    }  
	    /** 
	     * 将一些数据放到ShiroSession中,以便于其它地方使用 
	     */
	    private void setSession(Object key, Object value){  
	        Subject currentUser = SecurityUtils.getSubject();  
	        if(null != currentUser){  
	            Session session = currentUser.getSession();  
	            System.out.println("Session默认超时时间为[" + session.getTimeout() + "]毫秒");  
	            if(null != session){  
	                session.setAttribute(key, value);  
	            }  
	        }  
	    }  
	}

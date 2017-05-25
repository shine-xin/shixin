/**
 * Created by Admin on 2017/5/6.
 */
var switchBox=document.querySelectorAll('#login_main .login_box>.login_2d');
var loginBox=document.querySelectorAll('#login_main .login_box');
switchBox[0].onclick=function () {
    loginBox[0].style.display='none';
    loginBox[1].style.display='block';
}
switchBox[1].onclick=function () {
    loginBox[1].style.display='none';
    loginBox[0].style.display='block';
}
var ipt=document.querySelectorAll('#login_main .login_box input');
//用户名的正则  字母数字或者下划线开头  至少六位，最多十三位  邮箱字母数字@字母数字 手机号11位数字 用户名一串英文字母加数字下划线
var userNamemail=/^\w+@[a-z\d]+.[a-z]+$/i;
var userNamephoneNum=/\d{11}/;
var userNameCustom=/\w{6,13}/;
for (var i=0;i<ipt.length-1;i++){
    ipt[i].onfocus=function () {
       this.style.border='2px solid #22AC69';

    }
    ipt[i].onblur=function () {
        this.style.border='2px solid #ddd';
    }
}
var loginDownlodeAppHid=document.querySelector('#login_main .login_main_center .login_download_app>.login_download_app_hid');
var loginDownlodeApp=document.querySelector('#login_main .login_main_center .login_download_app');
console.log(loginDownlodeAppHid);
console.log(loginDownlodeApp);
loginDownlodeAppHid.onclick=function () {
    loginDownlodeApp.style.display='none';
}
var loginUserHelpLi=document.querySelectorAll('#login_footer .login_user_help>ul>li');
var loginUserHelpLiI=document.querySelectorAll('#login_footer .login_user_help>ul>li>span>i');
var loginUserHelpLiFirstP=document.querySelectorAll('#login_footer .login_user_help>ul>li>.login_user_help_text>p:first-child');
var loginUserHelpLiLastP=document.querySelectorAll('#login_footer .login_user_help>ul>li>.login_user_help_text>p:last-child');
for (var i=0;i<loginUserHelpLi.length;i++){
    loginUserHelpLi[i].index=i;
    loginUserHelpLi[i].onmouseover=function () {
        loginUserHelpLiI[this.index].style.color='#22ac69';
        loginUserHelpLiFirstP[this.index].style.color='#22ac69';
        loginUserHelpLiLastP[this.index].style.color='#22ac69';
    }
    loginUserHelpLi[i].onmouseout=function () {
        loginUserHelpLiI[this.index].style.color='#a1a1a1';
        loginUserHelpLiFirstP[this.index].style.color='rgb(51,51,51)';
        loginUserHelpLiLastP[this.index].style.color='#a1a1a1';
    }
}

//数据验证

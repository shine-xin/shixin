/**
 * Created by Admin on 2017/5/3.
 */
    var headerCar=document.getElementById('header_car');
    var headerCarSpan=headerCar.getElementsByTagName('span')[0];
    var headerCarA=headerCar.getElementsByTagName('a')[0];
    var headerHiddenCar=headerCar.getElementsByTagName('div')[0];
    var meauLi=document.querySelectorAll('.header_menu>ul>li');
    var submenus=document.getElementsByClassName('header_submenu');
    var banners=['./img/banner1.jpg','./img/banner2.jpg','./img/banner3.jpg','./img/banner4.jpg','./img/banner5.jpg','./img/banner6.jpg'];
    var bannerLi=document.querySelectorAll('#main .main_banner .banner1>ul >li');
    var bannerImg=document.querySelector(('#main>.main_banner>.banner1'));
    var mainBanner=document.getElementsByClassName('main_banner')[0];
    var bannerLast=document.querySelectorAll('#main .main_banner .banner1> .last')[0];
    var bannernext=document.querySelectorAll('#main .main_banner .banner1> .next')[0];
    var mainBannerSiderbarA=document.querySelectorAll('#main .main_banner .banner1 .main_center .main_sidebar_a>ul>li');
    var mainSidebarsubmeun=document.querySelectorAll('#main .main_banner .banner1 .main_center .main_sidebar_a>ul>li>.main_sidebar_submeun');
    var mainBannerSidebarBImg=document.querySelectorAll('#main .main_banner .banner1 .main_center .main_sidebar_b>img');
    var mainImgShow=document.querySelectorAll('#main  .main_self_floor .self_floor_foods .right_floor_foods img,#main  .main_self_floor .self_floor_foods .center_floor_foods img');
    var leftFixedLi=document.querySelectorAll('#left_fixed ul li');
    var leftFixedLiI=document.querySelectorAll('#left_fixed ul li i');
    var leftFixedLiA=document.querySelectorAll('#left_fixed ul li a');
    var leftFixedLiDiv=document.querySelectorAll('#left_fixed ul li div');
    var fixedTop=document.getElementsByClassName('left_fixed_three')[0];
var Body=document.getElementsByTagName('body')[0];

   // console.log(fixedTop);

    headerCar.onmouseover= function () {
        headerCar.style.backgroundColor='white';
        headerHiddenCar.style.display='block';
        headerCarSpan.style.color='#23ac38';
        headerCarA.style.color='#23ac38';
    };
    headerCar.onmouseout=function () {
        headerCar.style.backgroundColor='#f9f9f9';
        headerHiddenCar.style.display='none';
        headerCarSpan.style.color='#BFBFBF';
        headerCarA.style.color='black';
    };
    for (var i=1;i<meauLi.length-1;i++) {
        meauLi[i].index = i;
        meauLi[i].onmouseover = function () {
            a = this.index - 1;
            submenus[a].style.display = 'block';
            submenus[a].style.transition='all 1s';
        }
        meauLi[i].onmouseout = function () {
            a = this.index - 1;
            submenus[a].style.display = 'none';
            submenus[a].style.transition='all 1s ease 1s';
        }
    }
    //轮播图上左菜单栏的二级导航栏
    for (var s=0;s<mainBannerSiderbarA.length;s++) {
        mainBannerSiderbarA[s].index = s;
        mainBannerSiderbarA[s].onmouseover = function () {
            mainSidebarsubmeun[this.index].style.display = 'block';
            mainBannerSiderbarA[this.index].style.backgroundColor='white';
        }
        mainBannerSiderbarA[s].onmouseout = function () {
            mainSidebarsubmeun[this.index].style.display = 'none';
            mainBannerSiderbarA[this.index].style.backgroundColor='rgba(255,255,255,0.8)';
        }
    }

    //轮播图上右图片栏
    for (var m=0;m<mainBannerSidebarBImg.length;m++){
        mainBannerSidebarBImg[m].index = m;
        mainBannerSidebarBImg[m].onmouseover=function () {
            mainBannerSidebarBImg[this.index].style.background='rgba(255,255,255,1)';
            mainBannerSidebarBImg[this.index].style.transition='all 0.5s';

        }
        mainBannerSidebarBImg[m].onmouseout=function () {
            mainBannerSidebarBImg[this.index].style.background='rgba(255,255,255,0.7)';
            mainBannerSidebarBImg[this.index].style.transition='all 0.5s';
        }
}
//图片滑过变亮效果
    for (h=0;h<mainImgShow.length;h++){
        mainImgShow[h].index=h;
        mainImgShow[h].onmouseover=function () {
            mainImgShow[this.index].className='hovopy';
        }
        mainImgShow[h].onmouseout=function () {
            mainImgShow[this.index].className='';
        }
    }
    //回到顶部
    for (var f=0;f<leftFixedLi.length;f++){
        leftFixedLi[f].index=f;
        leftFixedLi[f].onmouseover=function () {
            leftFixedLiI[this.index].style.display='none';
            leftFixedLiA[this.index].style.display='block';
            leftFixedLi[this.index].style.backgroundColor='#666';
            leftFixedLiDiv[this.index].style.display='block';
        }
        leftFixedLi[f].onmouseout=function () {
            leftFixedLiI[this.index].style.display='block';
            leftFixedLiA[this.index].style.display='none';
            leftFixedLi[this.index].style.backgroundColor='#fff';
            leftFixedLiDiv[this.index].style.display='none';
        }
    }



//缓冲运动公式  leader=leader+(target-leader)/10
//target目标距离
    var leader=0,target=0,tops=null;

    document.onscroll=function () {
        var x=document.body.scrollTop||document.documentElement.scrollTop;
        var y=window.innerHeight;
        if(x>y){
            fixedTop.style.display='block';
        }else {
            fixedTop.style.display='none';
        }
    };
    fixedTop.onclick=function () {
        target=0;
        clearInterval(tops);
        leader =document.body.scrollTop;
        tops= setInterval(function () {
            leader=leader+(target-leader)/10;
            if(leader<=5){
                clearInterval(tops);
                leader=target;
            };
            window.scrollTo(0,leader);
        },30);
    };

//左侧绑定爬梯
//缓冲运动公式  leader=leader+(target-leader)/10
//target目标距离
var leftTops=null;
var rightFixLi=document.querySelectorAll('#right_fixed>ul>li');
var main=document.querySelector('#main');
var mainSelfFloor=document.querySelectorAll('.main_self_floor');
for(var i=0;i<rightFixLi.length;i++) {
    rightFixLi[i].index = i;
    rightFixLi[i].onclick = function () {
        clearInterval(leftTops);
        target = mainSelfFloor[this.index].offsetTop;
        leftTops = setInterval(function () {
            leader = leader + (target - leader) / 10;
            if (target - leader <= 10) {
                clearInterval(leftTops);
                leader = target;
            }
            window.scrollTo(0, leader)
        }, 30);

    }
}



function autoShow() {
//      缓冲运动      leader = leader + (target-leader)/10;
    leader = leader + (target-leader)/10;
    if(Math.abs(target-leader) <= 3){
        leader = target;
        clearInterval(leftTops);
    }
    window.scrollTo(0,leader)
}



    //轮播图

    var a=0;
    var timer=null;
    bannerImg.style.backgroundImage='url("'+banners[a]+'")';
    timer=setInterval(time,3000);

bannernext.onclick=function () {
    time(a);
};

bannerLast.onclick=function () {
    a--;
    if(a<0){
        a=banners.length- 1
    }
    bannershow(a);
};
for (var a=0;a<bannerLi.length;a++){
    bannerLi[a].index=a;
    bannerLi[a].onclick=function () {
        bannershow(this.index);
        a=this.index;
    }
}


    mainBanner.onmouseover=function () {
        clearInterval(timer);
    }
    mainBanner.onmouseout = function () {
        timer=setInterval(time,3000);
    }


    //封装
    function time() {
        a++;
        a%=banners.length;
        bannershow(a);
    }
    function bannershow(num) {
        for (var j=0;j<banners.length;j++){
            bannerLi[j].className='';
        }
        bannerLi[num].className='active';
        bannerImg.style.backgroundImage='url("'+banners[num]+'")';
        bannerImg.style.transition='all 1s ease '
    }


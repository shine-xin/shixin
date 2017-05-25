/**
 * Created by Admin on 2017/5/4.
 */
//中间配送地址选项卡
var addressControlSpan=document.querySelectorAll(' .foods_presentation>.buy_notes>.address_control>.address_wrap>span');
var addressControlDiv=document.querySelectorAll(' .foods_presentation>.buy_notes>.address_control>.address_wrap>div');
var addressProvinceLi=document.querySelectorAll('.foods_presentation>.buy_notes>.address_control>.address_wrap>.address_province>ul>li');
var addressCityLi=document.querySelectorAll('.foods_presentation>.buy_notes>.address_control>.address_wrap>.address_city>ul>li');
var addressLocalLi=document.querySelectorAll(' .foods_presentation>.buy_notes>.address_control>.address_wrap>.address_local>ul>li');
var province=document.getElementsByClassName('province')[0];
var city=document.getElementsByClassName('city')[0];
var local=document.getElementsByClassName('local')[0];
var address=document.getElementsByClassName('address')[0];
var addressControl=document.querySelectorAll(' .foods_presentation>.buy_notes>.address_control')[0];
var addressControlHidden=document.getElementsByClassName('address_control_hidden')[0];
var foodsColorType=document.querySelectorAll('.foods_presentation .foods_type .foods_color_type dd');
var foodsComboType=document.querySelectorAll(' .foods_presentation .foods_type .foods_combo_type dd');
var foodsReleaseType=document.querySelectorAll(' .foods_presentation .foods_type .foods_release_type dd');



// console.log(foodsColorType);
for (var i=0;i<addressControlSpan.length;i++){
    addressControlSpan[i].index=i;
    addressControlSpan[i].onclick=function () {
        for (var j=0;j<addressControlSpan.length;j++){
            addressControlDiv[j].className='hide';
        }
        addressControlDiv[this.index].className='blc';
    }
}
//地址选择变色

for(var i=0;i<addressProvinceLi.length;i++){
    addressProvinceLi[i].index=i;
    addressProvinceLi[i].onclick=function () {
        for (var j=0;j<addressProvinceLi.length;j++){
            addressProvinceLi[j].className='apt';
        }
        addressProvinceLi[this.index].className='opt';
        province.innerHTML=addressProvinceLi[this.index].innerText;
    }
}
for(var i=0;i<addressCityLi.length;i++){
    addressCityLi[i].index=i;
    addressCityLi[i].onclick=function () {
        for (var j=0;j<addressCityLi.length;j++){
            addressCityLi[j].className='apt';
        }
        addressCityLi[this.index].className='opt';
        city.innerHTML=addressCityLi[this.index].innerText;
    }
}
for(var i=0;i<addressLocalLi.length;i++){
    addressLocalLi[i].index=i;
    addressLocalLi[i].onclick=function () {
        for (var j=0;j<addressLocalLi.length;j++){
            addressLocalLi[j].className='apt';
        }
        addressLocalLi[this.index].className='opt';
        local.innerHTML=addressLocalLi[this.index].innerText;
    }
}
address.onclick=function () {
    addressControl.style.display='block';
}
addressControlHidden.onclick=function () {
    addressControl.style.display='none';
}
//型号选择
for(var i=0;i<foodsColorType.length;i++){
    foodsColorType[i].index=i;
    foodsColorType[i].onclick=function () {
        for (j=0;j<foodsColorType.length;j++){
            foodsColorType[j].style.border='1px solid #ddd';
        }
        foodsColorType[this.index].style.border='1px solid #FD532D';

    }
}
for(var i=0;i<foodsComboType.length;i++){
    foodsComboType[i].index=i;
    foodsComboType[i].onclick=function () {
        for (j=0;j<foodsComboType.length;j++){
            foodsComboType[j].style.border='1px solid #ddd';
        }
        foodsComboType[this.index].style.border='1px solid #FD532D';

    }
}
for(var i=0;i<foodsReleaseType.length;i++){
    foodsReleaseType[i].index=i;
    foodsReleaseType[i].onclick=function () {
        for (j=0;j<foodsReleaseType.length;j++){
            foodsReleaseType[j].style.border='1px solid #ddd';
        }
        foodsReleaseType[this.index].style.border='1px solid #FD532D';

    }
}

//数量加减
var foodsNumAdd=document.getElementsByClassName('foods_num_add')[0];
var foodsNumSubtract=document.getElementsByClassName('foods_num_subtract')[0];
var foodsNum=document.querySelector(' .foods_presentation .foods_num input');
foodsNumAdd.onclick=function () {
    num=foodsNum.value;
    num++;
    foodsNum.value=num;
    // alert(1);
}
foodsNumSubtract.onclick=function () {
    num--;
    if(num<0){
        num=0;
    }
    foodsNum.value=num;
}


//滑过小图改变主图
var foodImgSmallImgs=document.querySelectorAll(' .foods_details .food_img_small>ul>li img');
var foodImgMain=document.querySelector('.foods_details .food_img_main>img');
for(var i=0;i<foodImgSmallImgs.length;i++){
    foodImgSmallImgs[i].index=i;
    foodImgSmallImgs[i].onmouseover=function () {
        for(var j=0;j<foodImgSmallImgs.length;j++){
            foodImgSmallImgs[j].style.border='1px solid white';
        }
        foodImgSmallImgs[this.index].style.border='1px solid rgb(102,102,102)';
        foodImgMain.src=foodImgSmallImgs[this.index].src;
    }

}
//顶部导航栏
var fixTopNav=document.querySelector('#top_fix');
var subMain=document.querySelector('#subpage_main');
console.log(subMain.offsetTop)
var fixTopNavBlk=document.querySelector('.food_introduce_img');
console.log(window.innerHeight);
console.log(fixTopNavBlk.offsetTop);
document.onscroll=function () {
    var x=document.body.scrollTop;
    var y=fixTopNavBlk.offsetTop+subMain.offsetTop;
    if(x>y){
        fixTopNav.style.display='block';
    }else {
        fixTopNav.style.display='none';
    }
    var a=document.body.scrollTop;
    var b=window.innerHeight;
    if(a>b){
        fixedTop.style.display='block';
    }else {
        fixedTop.style.display='none';
    }
};






//鼠标移入放大镜显示
var magnifyingGlass=document.querySelector(' .foods_details .food_img_main>.magnifying_glass');
var foodImgMainBox=document.querySelector('.foods_details>.food_img_main');
var foodImgMainBigBox=document.querySelector(' .food_img_main_big');
var foodMainImg=document.querySelector(' .foods_details  .food_img_main>img');
var foodMainImgbig=document.querySelector('.food_img_main_big>img');
var foodsDetails=document.querySelector('.foods_details');
console.log(foodsDetails.offsetTop)
foodImgMainBox.onmouseover=function () {
    magnifyingGlass.style.display='block';
    foodImgMainBigBox.style.display='block';
}
var x=0,y=0;
foodImgMainBox.onmousemove=function (event) {
    //放大镜显示 大图显示


    var event = event || window.event;
    x = event.pageX - foodsDetails.offsetLeft - magnifyingGlass.offsetHeight/2;
    y = event.pageY  - foodsDetails.offsetTop-magnifyingGlass.offsetWidth/2;
    if(x <0 ){
        x = 0;
    }else if(x > foodImgMainBox.offsetWidth - magnifyingGlass.offsetWidth){
        x = foodImgMainBox.offsetWidth - magnifyingGlass.offsetWidth;
    }
    if(y < 0){
        y = 0;
    }else if(y >foodImgMainBox.offsetHeight - magnifyingGlass.offsetHeight){
        y = foodImgMainBox.offsetHeight - magnifyingGlass.offsetHeight;
    }

    magnifyingGlass.style.top = y  + 'px';
    magnifyingGlass.style.left = x  + 'px';

    foodMainImgbig.style.top = -y* foodMainImgbig.offsetHeight/foodMainImg.offsetHeight + 'px';
    foodMainImgbig.style.left = -x*foodMainImgbig.offsetWidth/foodMainImg.offsetWidth + 'px';
    foodMainImgbig.src=foodMainImg.src;
}
foodImgMainBox.onmouseout=function () {
    magnifyingGlass.style.display='none';
    foodImgMainBigBox.style.display='none';
}

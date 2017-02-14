//获取元素
$.get("../data/index/index.json",function(data){
	$(".tab-con .pinpai1 li").each(function(i){
		var iTarget="img"+i;
		$(".tab-con .pinpai1 li").eq(i).find("a").find("img").attr({src:data.tuijian[iTarget]});
	});
	$(".tab-con .pinpai2 li").each(function(i){
		var iTarget="img"+i;
		$(".tab-con .pinpai2 li").eq(i).find("a").find("img").attr({src:data.guoji[iTarget]});
	})
	$(".tab-con .pinpai3 li").each(function(i){
		var iTarget="img"+i;
		$(".tab-con .pinpai3 li").eq(i).find("a").find("img").attr({src:data.guonei[iTarget]});
	})

})


//网站导航
//楼梯
var isClick=false;
$("#loutiNav ul li").click(function(){
	isClick=true;
	$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
	var iTop=$(".louti").eq($(this).index()).offset().top;
	$("html,body").stop().animate({scrollTop:iTop},1000,function(){
		isClick=false;
	});			
})
$(window).scroll(function(){
	if(!isClick){
		var iScrollTop=$(this).scrollTop();
		$(".louti").each(function(){
			if(iScrollTop>=$(this).offset().top){
				$("#loutiNav ul li").eq($(this).index()).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
			}
		})
	}	
})

//微博
$(".weibo-img").mouseover(function(){
	$(".weibo2").css("display","block");
})
$(".weibo-img").mouseout(function(){
	$(".weibo2").css("display","none");
})
//微信
$(".weixin-img").mouseover(function(){
	$(".weixin2").css("display","block");
})
$(".weixin-img").mouseout(function(){
	$(".weixin2").css("display","none");
})


//网站头部
//输入框
$(".search_box input").focus(function(){
	$(this).val("");
})
$(".search_box input").blur(function(){
	$(this).val("茅台");
})
//百度搜索框
$("#searchInput").focus(function(){
var oInput=$("#searchInput");
oInput.keyup(function(){
	$.ajax({
		url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oInput.val()+"&json=1&p=3",
		dataType:"jsonp",
		jsonp:"cb",
		success:function(data){
			var lists=data.g;
			var oUl=$("#tipList");
			oUl.html("");
			for(var i in lists){
				var oLi=$("<li></li>");
				oLi.html(lists[i].q);
				oUl.append(oLi);
				$("#tipList").css("display","block");
			}
		}		
	})
})
})
$("#searchInput").blur(function(){
	$("#tipList").css("display","none");
})
//购物车
$(".shopcar").mouseover(function(){
	$(".shopcar dd").css("display","block");
	$(".shopcar dt").css({"border":"1px solid #e7e7e7"});
	$(".shopcar dt").css("box-shadow","0 0 2px rgba(0,0,0,.2)");
})
$(".shopcar").mouseout(function(){
	$(".shopcar dd").css("display","none");
	$(".shopcar dt").css("border","1px solid #e6e3d3");
	$(".shopcar dt").css("box-shadow","none");
})


//导航
//左边部分
$("#category-nav .move").each(function(i){
	$(this).mouseover(function(){
		$("div .pop").eq(i).css("display","block");
	});
	$(this).mouseout(function(){
		$("div .pop").eq(i).css("display","none");
	})
})


//轮播图
$(".flex-control-nav li a").each(function(i){
	$(this).click(function(){
		$(".flex-control-nav li a").eq(i).addClass("flex-active").parent().siblings().find("a").removeClass();
		$(".slides li").eq(i).addClass("flex-active-slide").siblings().removeClass();
	})
})
//自动播放
var curIndex = 0; //当前index
 //  alert(imgLen);
 // 定时器自动变换3秒每次
var autoChange = setInterval(function(){ 
    if(curIndex < $(".slides li").length-1){ 
    curIndex ++; 
    }else{ 
    curIndex = 0;
    }
//调用变换处理函数
    changeTo(curIndex); 
},3000);
 
$(".slides").find("li").each(function(item){ 
$(this).hover(function(){ 
clearInterval(autoChange);
changeTo(item);
curIndex = item;
},
function(){
  autoChange = setInterval(function(){ 
    if(curIndex < $(".slides li").length-1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex); 
   },3000);
    });
  });
  function changeTo(num){ 
    $(".slides").find("li").removeClass("flex-active-slide").eq(num).addClass("flex-active-slide");
    $(".flex-control-nav li").find("a").removeClass("flex-active").eq(num).addClass("flex-active");
  }


//品牌推荐,限时抢购选项卡
$(".zj-sale .tab li").each(function(i){
	$(this).click(function(){
		$(".zj-sale .tab li").eq(i).addClass("select").siblings().removeClass();
		$(".zj-sale .tab-con ul").eq(i).css("display","block").siblings().css("display","none");		
	})
})

//白酒选项卡
$("#floor-bai .tab li").each(function(i){
	$(this).mouseover(function(){
		$("#floor-bai .tab li").eq(i).addClass("select").siblings().removeClass();
		$(".zj-floor .tab-con ul").eq(i).css("display","block").siblings().css("display","none");
		
	})
})

//红酒选项卡
$("#floor-hong .tab li").each(function(i){
	$(this).mouseover(function(){
		$("#floor-hong .tab li").eq(i).addClass("select").siblings().removeClass();
		$("#floor-hong .zj-floor .tab-con ul").eq(i).css("display","block").siblings().css("display","none");
		
	})
})


//中心放大
$(".choose1 li .move1").each(function(i){
	$(this).mouseover(function(){
		$(".choose1 li img").eq(i).css("width","290px");
		$(".choose1 li img").eq(i).css("height","190px");		
	})
	$(this).mouseout(function(){
		$(".choose1 li img").eq(i).css("width","280px");
		$(".choose1 li img").eq(i).css("height","180px");		
	})
})


//右边的吸顶
var iFixTop=$(".right_nav").offset().top;
$(window).scroll(function() {
	var iScrollTop = $(window).scrollTop();
	if(iScrollTop>=iFixTop) {
		$(".right_nav").css({"position":"fixed","top":0});		
	} else {
		$(".right_nav").css({"position":"absolute","top":"284px"});
	}
})
$(".right_nav").mouseover(function(){
	$(this).css("marginLeft","520px");
})
$(".right_nav").mouseout(function(){
	$(this).css("marginLeft","600px");
})

//返回顶部
$(".back_top a").click(function () {
        var speed=200;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });



	







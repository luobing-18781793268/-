//网站导航
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

//导航
//左边部分
$("#category-nav").mouseover(function(){
	$("#category-nav .move").css("display","block");
})
$("#category-nav").mouseout(function(){
	$("#category-nav .move").css("display","none");
})
$("#category-nav .move").each(function(i){
	$(this).mouseover(function(){
		$("div .pop").eq(i).css("display","block");
	});
	$(this).mouseout(function(){
		$("div .pop").eq(i).css("display","none");
	})
})

//楼梯
var isClick=false;
$(".wly-md .md .louNav").click(function(){
	isClick=true;
	var iTop=$(".louti").eq($(this).index()).offset().top;
	$("html,body").stop().animate({scrollTop:iTop},1000,function(){
		isClick=false;
	});			
})
//返回顶部
$(".toTop").click(function () {
        var speed=200;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });

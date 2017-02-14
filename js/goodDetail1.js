//获取元素
$.get("../data/goodDetail/goodDetail.json",function(msg){
//首页，白酒，名字
$("#com-crumb").append("<a href='index.html'>"+msg["goodsMsg"][0]["shouye"]+"</a>");
$("#com-crumb").append("<a href='index.html'>"+msg["goodsMsg"][0]["baijiu"]+"</a>");
$("#com-crumb").append("<a href='index.html'>"+msg["goodsMsg"][0]["goodName"]+"</a>");
$("#com-crumb").append("<em>"+msg["goodsMsg"][0]["goodMsg"]+"</em>");

})

$(function(){
	

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

//图片选项卡
$(".piclist-con .piclist li").each(function(i){
	$(this).mouseover(function(){
		$(".piclist-con .piclist li").eq(i).addClass("selected").siblings().removeClass();
		$(".picZoomer-pic-wp img").eq(i).addClass("active1").siblings().removeClass("active1");
		$(".bigImg img").eq(i).addClass("active2").siblings().removeClass("active2");
	})	
})
//放大镜
$(".picZoomer-pic-wp").mousemove(function(eve){
	$(".bigImg").show();
	var x = eve.screenX;
	var y = eve.screenY+$(window).scrollTop();
	x -= $(this).offset().left;
	y = y -$(this).offset().top;
	x = (x/300).toFixed(2);
	y = (y/300).toFixed(2);
	x = -($(".bigImg img").width()*x-400);
	y = -($(".bigImg img").height()*y-500);
	$(".bigImg img").css('top',y+'px');
	$(".bigImg img").css('left',x+'px');
})
	$(".picZoomer-pic-wp").mouseout(function(){
		$(".bigImg").hide();
	})

//商品数量的加减
var oNum=$(".op .num input").val();
$(".op .add").click(function(){		
	oNum++;
	$(".op .num input").val(oNum);
})
$(".op .plus").click(function(){
	if(oNum<=1){
		oNum==1;
	}else{
		oNum--;
	    $(".op .num input").val(oNum);
	}	
})

//商品介绍评价，中酒服务
$(".tab .tab-t ul li a").each(function(i){
	$(this).click(function(){
		$(".tab .tab-t ul li").eq(i).addClass("sel").siblings().removeClass();		
	})
})

//商品评价
$(".all ul li a").each(function(i){
	$(this).click(function(){
		$(".all ul li").eq(i).addClass("sel").siblings().removeClass();
	})
})


//加入购物车
var countNum=$(".icon-count .countId").text();
$(".op .go-into").click(function(){
    var goodId=$(".info h1").attr("id");
	var goodName=$(".info h1").text();
	var goodCode=$(".piclist-no .goodsCode").text();
	var goodPrice=$(".info .pri").html();
	var goodNum=$(".op .num input").val();
	
	var goods = $.cookie("carts")?JSON.parse($.cookie("carts")):{};
	if(goodId in goods){
		goods[goodId].num++;
	}else{
		goods[goodId]={	
			id:goodId,
			name:goodName,
			code:goodCode,
			price:goodPrice,
			num:goodNum
		}
	}
	$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
	countNum++;
	$(".icon-count .countId").text(countNum);
})
$("#OpenShopCar").click(function() {		
	location.href = "shopCar.html";
})

//飞入
//var offset = $("#OpenShopCar").offset();  //结束的地方的元素
//	$(".op .go-into").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
//		var addcar = $(this);		
//		var flyer = $('<img class="u-flyer" src="../img/goodDetail/322.jpg">');
//		flyer.fly({
//			start: {
//				left: event.pageX,
//				top: event.pageY
//			},
//			end: {
//				left: offset.left+10,
//				top: offset.top+10,
//				width: 0,
//				height: 0
//			},			
//		});
//	});

})

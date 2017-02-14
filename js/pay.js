//获取元素
$.get("../data/pay/pay.json",function(msg){
//微信
$(".weixin").append("<img src="+"../"+msg["weixin"][0]["pic1"]+"/>");
//app
$(".app").append("<img src="+"../"+msg["app"][0]["pic2"]+"/>");	
//卖家中心	
for(var key in msg["sellHome"][0]){
	$(".ol").append("<li><a href='##'>"+msg["sellHome"][0][key]+"</a></li>");
}
//电话号码
$(".login-regin .phoneNum").html(msg["phoneNum"][0]["phoneNumber"]);
//提交订单步骤
$(".progress .pro-c1").css("background","url("+"../"+msg["goodsDetail"][0]["backImg"]+") no-repeat");
//商品清单
$(".p-goods .p-img a").append("<img src="+"../"+msg["goodsDetail"][0]["goodsImg"]+"/>");
$(".p-detail .p-name").append("<a href='##'>"+msg["goodsDetail"][0]["goodsName"]+"</a>");
$(".p-detail .p-more").append("<a href='##'>"+msg["goodsDetail"][0]["goodsNum"]+"</a>");
$(".p-price").append("<strong>"+msg["goodsDetail"][0]["goodsPrice"]+"</strong>");
$(".order-table td.fore2").html(msg["goodsDetail"][0]["goodsNumber"]);
})

//微信端
$(".moblie-qrcode").mouseover(function(){
	$(".moblie-qrcode .weixin").css("display","block");
})
$(".moblie-qrcode").mouseout(function(){
	$(".moblie-qrcode .weixin").css("display","none");
})
//app
$(".app-qrcode").mouseover(function(){
	$(".app-qrcode .app").css("display","block");
})
$(".app-qrcode").mouseout(function(){
	$(".app-qrcode .app").css("display","none");
})
//卖家中心
$(".sellHome").mouseover(function(){
	$(".sellHome .dropdown-menu").css("display","block");
})
$(".service").mouseout(function(){
	$(".sellHome .dropdown-menu").css("display","none");
})




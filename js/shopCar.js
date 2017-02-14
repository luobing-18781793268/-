//获取元素
$.get("../data/shopCar/shopCar.json",function(msg){
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
$(".progress .pro-c1").css("background","url("+"../"+msg["stepImg"][0]["step1"]+") no-repeat");
//我的购物车
$(".show .message ul").append("<li>"+msg["myShopCar"][0]["li1"]+"</li>");
$(".show .message ul").append("<li><a href='index.html'>"+msg["myShopCar"][0]["li2"]+"</a>"+msg["myShopCar"][0]["li3"]+"</li>");

//结算
$(".cart-total-2014 .t-checkbox").append("<input type='checkbox' checked class='jdcheckbox' />");
$(".cart-total-2014 .t-checkbox").append("<label>"+msg["jieSuan"][0]["chooseAll"]+"</label>");
$(".cart-total-2014 .delate").append("<a href='##'>"+msg["jieSuan"][0]["delate"]+"</a>");
//$(".cart-total-2014 .selectedCount").html(msg["jieSuan"][0]["count"]);
$(".cart-total-2014 .cart-button").append("<a href='pay.html' class='checkout' id='toSettlement'>"+msg["jieSuan"][0]["buy"]+"</a>");
//$(".cart-total-2014 .total").html(msg["jieSuan"][0]["yunfei"]).append("<span>"+msg["jieSuan"][0]["price"]+"</span>");
})

//功能实现
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


function goodsBuy(data){
//商品添加
var goods=$.cookie(data)? JSON.parse($.cookie(data)) : {};
for(var id in goods){
    $("#product-list .ui-ceilinglamp-1").before("<div class='item item_selected' id="+goods[id].id+"><div class='item_form c1'><div class='cell p-checkbox'><input class='checkbox' type='checkbox' checked value='1' /></div><div class='cell p-goods'><div class='p-img'></div><div class='p-name'></div><div class='p-code'></div></div><div class='cell p-price'><span class='price'></span></div><div class='cell p-quantity'><div class='quantity-form'></div></div><div class='cell p-remove'></div></div></div>");
//	$("#product-list").append("<div class='ui-ceilinglamp-1' id="+goods[id].id+"><div class='cart-dibu'><div class='cart-total-2014'><span class='column t-checkbox form'><input type='checkbox' checked class='jdcheckbox' /><label>全选</label></span><span class='delate'><a href='##'>删除</a></span><span class='selectedCount'></span>件商品<div class='cart-button'><a href='##' class='checkout' id='toSettlement'>去结算</a></div><div class='total fr'>总计(不含运费)：<span></span></div></div></div></div>");
	
	$("#"+goods[id].id+" .p-goods .p-name").append("<a href='##'>"+goods[id].name+"</a>");
	$("#"+goods[id].id+" .p-goods .p-code").html(goods[id].code);
	$("#"+goods[id].id+" .p-price .price").html(goods[id].price);
//	$("#"+goods[id].id+" .total span").text(parseInt($("#"+goods[id].id+" .p-price .price").text().split("￥")[1]*goods[id].num)+".00");
    $("#"+goods[id].id+" .p-goods .p-img").append("<img src='../img/shopCar/1_50.png'/>");
    $("#"+goods[id].id+" .p-quantity .quantity-form").append("<a href='##' class='decrement'>-</a>");
    $("#"+goods[id].id+" .p-quantity .quantity-form").append('<input type="text" class="quantity-text" value='+goods[id].num+'>');
    $("#"+goods[id].id+" .p-quantity .quantity-form").append("<a href='##' class='increment'>+</a>");
    $("#"+goods[id].id+" .p-quantity .quantity-form").append("<span class='allPrice'></span>");
    $("#"+goods[id].id+" .allPrice").text(parseInt($("#"+goods[id].id+" .p-price .price").text().split("￥")[1]*goods[id].num));
    $("#"+goods[id].id+" .p-remove").append("<a href='##' class='cart-remove'>删除</a>");
//    $(".cart-total-2014 .selectedCount").html($(".quantity-text").val());
    var needPay=0;
    $(".allPrice").each(function(i){
		perPay=$(".allPrice").eq(i).text();
		needPay+=parseInt(perPay);
	});
	$(".total span").html(needPay);   
}
//商品删除
$(".p-remove").click(function(){
	var goods=JSON.parse($.cookie(data));
	var goodId=$(this).parent().parent().attr("id");
	$(this).parent().parent().remove();
	delete goods[goodId];
    if(JSON.stringify(goods)!="{}") {
		$.cookie("carts",JSON.stringify(goods),{expires:7,path:"/"});
	} else {
		$.cookie("carts","",{expires:-1,path:"/"});
		$(".message").css("display","block");
	}	
})
if($(".jdcheckbox").is(":checked")){
	$(".delate").click(function(){
		$(".p-remove").parent().parent().remove();
		if(JSON.stringify(goods)!="{}") {
		$.cookie("carts",JSON.stringify(goods),{expires:7,path:"/"});
	} else {
		$.cookie("carts","",{expires:-1,path:"/"});
		$(".message").css("display","block");
	}
	})
}
//商品数量的加减

$(".p-quantity .quantity-form .increment").click(function(){
	var goods=JSON.parse($.cookie(data));
	var goodId=$(this).parent().parent().parent().parent().attr("id");
	var oNum=$("#"+goodId+" .p-quantity .quantity-form .quantity-text").val();
	oNum++;
	goods[goodId].num++;
	$("#"+goodId+" .p-quantity .quantity-form .quantity-text").val(oNum);
	$("#"+goodId+" .p-quantity .quantity-form span").text(parseInt($("#"+goodId+" .p-price .price").text().split("￥")[1]*oNum));	
	goods[goodId].num=oNum;
	var needPay=0;
    $(".allPrice").each(function(i){
		perPay=$(".allPrice").eq(i).text();
		needPay+=parseInt(perPay);
	});
	$(".total span").html(needPay);
	$.cookie(data, JSON.stringify(goods), {expires: 7, path: "/"});
})

$(".p-quantity .quantity-form .decrement").click(function(){
	var goods=JSON.parse($.cookie(data));
	var goodId=$(this).parent().parent().parent().parent().attr("id");
	var oNum=$("#"+goodId+" .p-quantity .quantity-form .quantity-text").val();
	if(oNum<=1){
		oNum==1;
		goods[goodId].num==1;
	}else{		
		oNum--;
		goods[goodId].num--;
	    $("#"+goodId+" .p-quantity .quantity-form .quantity-text").val(oNum);
	    $("#"+goodId+" .p-quantity .quantity-form span").text(parseInt($("#"+goodId+" .p-price .price").text().split("￥")[1]*oNum));	    
		goods[goodId].num=oNum;
		var needPay=0;
    $(".allPrice").each(function(i){
		perPay=$(".allPrice").eq(i).text();
		needPay+=parseInt(perPay);
	});
	$(".total span").html(needPay);
	$.cookie(data, JSON.stringify(goods), {expires: 7, path: "/"});
	}	
})
}
goodsBuy("carts");




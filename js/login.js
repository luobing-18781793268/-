//手机号码
var mobile = true;
$("#userId").on({
	focus:function(){
		var userName = $("#userId").val();
		if(userName==""){
			$("#phoneNumber_error").css("display","block");
			mobile = false;
		}else{
			if(/^1(5|3|8)\d{9}$/.test(userName)){
				("#userId_ok").css("display","block")
				$("#phoneNumber_error").css("display","none");
				mobile = true;
			}else{
				$("#userId_ok").css("display","none")
				$("#phoneNumber_error").css("display","block");
				mobile = false;
			}
		}
		return mobile;
	},
	blur:function(){
		if($("#userId").val()==""){
			$("#phoneNumber_error").css("display","block");
			mobile = false;
	   }
		return mobile;
	},
	keyup:function(){
		var userName = $("#userId").val();
		if(/^1(5|3|8)\d{9}$/.test(userName)){
			$("#userId_ok").css("display","block")
			$("#phoneNumber_error").css("display","none");
			mobile = true;
		}else{
			$("#userId_ok").css("display","none")
			$("#phoneNumber_error").css("display","block");
			mobile = false;
		}
		return mobile;
	}
})
//密码
var pwd1=true;
$("#password").blur(function(){
	var pswNum=$("#password").val();
	if(pswNum & /^(\w){6,20}$/.test(pswNum)){
		$("#passWord_error").css("display","none");
		return pwd1=true;
	}else{
		$("#passWord_error").css("display","block");
		$("#passWord_ok").css("display","none");
		return pwd1=false;
	}
	return pwd1;
})
//登录
$("#r_load_btn").click(function(){
	if($("#userId").val()==""||$("#password").val()==""){
		return false;
	}else{
		if(mobile&pwd1){
			var user = $.cookie("userName")? JSON.parse($.cookie("userName")) : {};
			for(var i in user){
				if($("#userId").val()==user.userName & $("#password").val()==user.password){
					location.href = "index.html";
				}else{
					$("#passWord_error").css("display","block");
					$("#passWord_ok").css("display","none");
				}
			}
		}
	}
	//记住用户名
	if($(".choosePsw").checked==true){
		var info = {};
		var userName1 = $("#userId").val();
		info.userName1 = userName1;
		$.cookie("userName1",JSON.stringify(info),{"expires":7,"path":"/"});
	}
})
//保存用户名
var user1 = $.cookie("userName1")? JSON.parse($.cookie("userName1")) : {};
$("#userId").val()==user1.userName1;




	

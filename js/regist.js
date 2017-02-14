
//mobile 验证
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
//pictureCode 图片验证
var pic = true;
$.ajax({
	url:"../data/regist/regist.json",
	success:function(pic){
		var aPic = pic.checkCode;
		var num = 0;
		var oNewVal = aPic[0].picId;
		$(".c_ts").find("a").on("click",function(){
			num = parseInt(Math.random()*5);
			oNewVal = aPic[num].picId;
			var oNewSrc = aPic[num].src;
			$(".c_img a img").attr("src",oNewSrc);
		})
		$("#yanZhengCode_email").focus(function(){
			if($("#yanZhengCode_email").val()==""){
				$("#yanZhengCode_email_error").css("display","block");
				pic = false;
			}else{
				if($("#yanZhengCode_email").val()==oNewVal){
					$("#yanZhengCode_email_error").css("display","none");
					$("#yanZhengCode_email_ok").css("display","block");
					pic = true;
				}else{
					$("#yanZhengCode_email_error").css("display","block");
					$("#yanZhengCode_email_ok").css("display","none");
					pic = false;
				}
			}
			return pic;
		})
		$("#yanZhengCode_email").blur(function(){
			if($("#yanZhengCode_email").val()==oNewVal){
				$("#yanZhengCode_email_error").css("display","none");
				$("#yanZhengCode_email_ok").css("display","block");
				pic = true;
			}else{
				$("#yanZhengCode_email_error").css("display","block");
				$("#yanZhengCode_email_ok").css("display","none");
				pic = false;
			}
			return pic;
		})
	}
})

//yanZhengCode 手机验证码
var code = true;
$("#yanZhengCode").blur(function(){
	if($("#yanZhengCode").val()==""){
		$("#yanZhengCode_error").css("display","block");
		code = false;
	}else{
		if($("#yanZhengCode").val()==123){
			$("#yanZhengCode_error").css("display","none");
			$("#yanZhengCode_ok").css("display","block");
			code = true;
		}else{
		    $("#yanZhengCode_error").css("display","block");
		    $("#yanZhengCode_ok").css("display","none");
			code = false;
		}
	}
	return code;
})

//password 密码设置
var pwd1=true;
$("#password").keyup(function(){
	var pswNum=$("#password").val();
	if(pswNum & /^(\w){6,20}$/.test(pswNum)){
		$("#passWord_ok").css("display","block");
		$("#passWord_error").css("display","none");
		return pwd1=true;
	}else{
		$("#passWord_error").css("display","block");
		$("#passWord_ok").css("display","none");
		return pwd1=false;
	}
	return pwd1;
})

//确认密码
var pwd2=true;
$("#repeatPassWord").keyup(function(){
	var rePswNum=$("#repeatPassWord").val();
	var pswNum=$("#password").val();
	if(rePswNum===pswNum){
		$("#repeatPassWord_ok").css("display","block");
		$("#repeatPassWord_error").css("display","none");
		return pwd2=true;
	}else{
		$("#repeatPassWord_error").css("display","block");
		$("#repeatPassWord_ok").css("display","none");
		return pwd2=false;
	}
	return pwd2;
})

//r_load_btn 注册按钮
$("#r_load_btn").click(function(){	
		if($("#userId").val()==""||$("#yanZhengCode_email").val()==""||$("#yanZhengCode").val()==""||$("#password").val()==""){
			return false;
		}else {
			if(mobile&&pic&&code&&pwd1&&pwd2){
				//cookie设置
				var info = {};
				var userName = $("#userId").val();
				var password = $("#password").val();
				info.userName = userName;
				info.password = password;
				$.cookie("userName",JSON.stringify(info),{"expires":7,"path":"/"});
				location.href = "login.html";
		    }else{
				return false;
		    }
		}	      	
  })


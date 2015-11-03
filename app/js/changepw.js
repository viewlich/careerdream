/* -------------------------------------------------
 * JavaScript Document
 * login.js
 * -------------------------------------------------
*/
//changepw
$(function (){
	//send email
	$('.sendemail ul li input.send_email,.onsendemail ul li input.onsend_email').click(function(){
		//判定是否注册邮箱
		
		//Send again
		var inputno = $('.onsendemail ul li input.onsend_email');
		inputno.attr("disabled","false").css({background:'#999',cursor:'default',width:'150px'});
		$(this).parents('.sendemail').hide().siblings('.onsendemail').show();
		function sttime(){				
		var count = 60; 				
		var countdown = setInterval(CountDown, 1000); 		
		function CountDown() { 
				inputno.attr("disabled","false").css({background:'#999',cursor:'default',width:'150px'});
				inputno.val("再次发送（" + count + "）"); 
				if (count == 0) { 	
				inputno.val("再次发送");						
				clearInterval(countdown); 
				inputno.removeAttr("disabled");
				inputno.css({background:'#7399c6',cursor:'pointer',width:'100px'});
			} 
			count--; 
			}
		}
		sttime();
	});	
	//forget&change password
	$('.fillin_page ul li a#fpw_isnewps,.fillin_page ul li a#rep_isnewps').click(function(){
		var ogpw = $('.fillin_page input[name=fpw_ogpw]');
		var newpw = $('.fillin_page input[name=fpw_newpw]');
		var isnewpw = $('.fillin_page input[name=fpw_isnewps]');
		//is original
			//判定是否原密码
		//isnull
		if(newpw.val()==""){
			newpw.addClass('redplace').attr('placeholder','密码不能为空');
			return false;
		}
		//issame
		if(newpw.val()!=isnewpw.val()){
			isnewpw.val('').addClass('redplace').attr('placeholder','俩次输入的密码不一致');
			return false;
		}
	});
});
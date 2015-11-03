/* -------------------------------------------------
 * JavaScript Document
 * base.js
 * -------------------------------------------------
*/
//tooltip
$(function () { $("[data-toggle='tooltip']").tooltip(); });
//menu_left
$(document).ready(function(){
	//login
	loginpop();
	//uber
	uberbox();
	$('.login_pop_tit').click(function(){
		$('.login_pop,.login_pop_tit,.regist_pop').fadeOut();
	});
	$('.login_pop ul li a.log_pop_regist').click(function(){
		$('.login_pop').fadeOut();
		$('.regist_pop').fadeIn();
	});
	$('.login_pop ul li a.login_pop_alink').click(function(){
		$('.login_pop').fadeIn();
		$('.regist_pop').fadeOut();
	});	
	//input 
	$('input[type=text],input[type=password],select,textarea').addClass('form-control');
	$('.search input[type=text]').removeClass('form-control');
});
//going up
//going up
$(function(){
	// 返回顶部
	function gotop(){
		var width_w = ($(window).width()/2)+460+20;		
		$(".goingup").css('left',width_w);
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
		if( scrollt >100 ){
			$(".goingup").fadeIn(400);
		}else{
			$(".goingup").stop().fadeOut(400);
		}
	}

	$(window).scroll(function(){
		gotop();
	});

	$(window).resize(function(){
		gotop();
	})			
	$(".goingup").click(function(){			
		$("html,body").animate({scrollTop:"0px"},200);			
	});
	//反馈
});
//alert success
function alertsuc(){
	var tips = ['<div class="dialog_box">',
				'<div class="dialog_tit"></div>',
				'<div class="dialog">',
				'<p><strong><img src="images/success_dot.png" alt="职业梦" /></strong>',
				'<em>修改成功!</em></p>',
				'</div>'].join('');					
	$(tips).appendTo('body');
	setTimeout("$('.dialog_box').hide()",1000) //毫秒
}
//login
document.write('<script src="js/base_login.js"></script>');
//headerinitial
function headerinitial(){	
	//user	
	$('.user .user_psuse').on({
		mouseover:function(){
			$(this).find('.floatuser').stop(true,false).slideDown();
		},
		mouseout:function(){
			$(this).find('.floatuser').stop(true,false).slideUp();
		}
	});
	//navCodeIndex
	localStorage.index = $('#navCodeIndex').text();
	$('.nav ul li').eq(localStorage.index).addClass('active').siblings().removeClass('active');
	$('.nav ul li').hover(
		function(){
			$(this).siblings().removeClass('active');
		},
		function(){
			$(this).parent().find('li').eq(localStorage.index).addClass('active');
		}
	);
}
//ie placeholder
$(document).ready(function(){
    var doc=document,inputs=doc.getElementsByTagName('input'),supportPlaceholder='placeholder'in doc.createElement('input'),placeholder=function(input){var text=input.getAttribute('placeholder'),defaultValue=input.defaultValue;
    if(defaultValue==''){
        input.value=text}
        input.onfocus=function(){
            if(input.value===text){this.value=''}};
            input.onblur=function(){if(input.value===''){this.value=text}}};
            if(!supportPlaceholder){
                for(var i=0,len=inputs.length;i<len;i++){var input=inputs[i],text=input.getAttribute('placeholder');
                if(input.type==='text'&&text){placeholder(input)
            }
        }
    }
});
//uber
function uberbox(){
	var templet = ['<!-- uber -->',
					'<div class="uber_box">',
						'<div class="uber_tit"></div>',
						'<div class="uber_cont">',
							'<h1>职业梦回馈用户！</h1>',
							'<p>职业梦送您Uber50元优惠券一张！职业梦&Uber为您的面试保驾护航！</p>',
							'<span>',
								'<strong>优惠码为：<i>3wz8bue</i></strong>',
								'<em><img src="images/uber.png" /></em>',
								'<strong>Uber,世界因你前进！</strong>',
							'</span>',
						'</div>',
					'</div>',
					'<!-- uber end -->'].join('');					
	$(templet).appendTo('body');	
	center($('.uber_cont'));
	// setTimeout("$('.uber_box').hide()",1000) //自动消失
	$('.uber_tit').click(function(){
		$('.uber_box').fadeOut();
	});
}

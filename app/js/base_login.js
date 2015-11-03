 /* -------------------------------------------------
 * JavaScript Document
 * base_login.js
 * -------------------------------------------------
*/
//login_base
$(document).ready(function(){
	//little change
	$('.login_box ul li input[name=login_email],.login_pop_box ul li input[name=login_pop_email]').bind({
		focus:function(){
			$(this).addClass('login_email_act');
		},
		blur:function(){
			$(this).removeClass('login_email_act');
		}
	});
	$('.login_box ul li input[name=login_password],.login_pop_box ul li input[name=login_pop_password]').bind({
		focus:function(){
			$(this).addClass('login_pass_act');
		},
		blur:function(){
			$(this).removeClass('login_pass_act');
		}
	});
	//remember password
	$('.login_box ul li a.reme_pw,.login_pop_box ul li a.reme_pop_pw').click(function(){
		$(this).toggleClass('active');
	});
	//regist&wechat switch
	$('.login_box .regist_sel a,.login_pop_box .regist_pop_sel a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.login_box .regist_box').eq($(this).index()).show().siblings('.regist_box').hide();		
		$('.login_pop_box .regist_pop_box').eq($(this).index()).show().siblings('.regist_pop_box').hide();
	});
});
//弹出层居中
function center(obj) { 
              var screenWidth = $(window).width(), screenHeight = $(window).height();  //当前浏览器窗口的 宽高           
              var scrolltop = $(document).scrollTop();//获取当前窗口距离页面顶部高度               
              var objLeft = (screenWidth - obj.width())/2            
              var objTop = (screenHeight - obj.height())/2+ scrolltop;             
              obj.css({left: objLeft + 'px', top: objTop + 'px'});          //浏览器窗口大小改变时           
              $(window).resize(function() {               
              	screenWidth = $(window).width();              
              	screenHeight = $(window).height();              
              	scrolltop = $(document).scrollTop();                           
              	objLeft = (screenWidth - obj.width())/2                
              	objTop = (screenHeight - obj.height())/2 + scrolltop;                           
              	obj.css({left: objLeft + 'px', top: objTop + 'px'});                      
              });           //浏览器有滚动条时的操作、          
              $(window).scroll(function() {               
              	screenWidth = $(window).width();              
              	screenHeight = $(window).height();              
              	scrolltop = $(document).scrollTop();                           
              	objLeft = (screenWidth - obj.width())/2                
              	objTop = (screenHeight - obj.height())/2 + scrolltop;                           
              	obj.css({left: objLeft + 'px', top: objTop + 'px'});          
              });              
}
//login_pop
function loginpop(){
	var loginin = ['<div class="login_pop_box">',
						'<div class="login_pop_tit"></div>',
						'<div class="login_pop right_box">',
							'<h1>登录</h1>',
							'<ul class="row">',
								'<li><input type="text" name="login_pop_email" placeholder="邮箱" /></li>',
								'<li><input type="password" name="login_pop_password" placeholder="密码" /></li>',
								'<li><span class="col-sm-6"><a href="javascript:" class="reme_pop_pw active">记住密码</a></span><em class="col-sm-6"><a href="javascript:">忘记密码？</a></em></li>',
								'<li><input type="submit" name="login_pop" value="登录" /></li>',
								'<li><img src="images/login/login_or.png" /></li>',
								'<li><a href="javascript:" class="log_pop_wechat"><i><img src="images/login/weichat_bai.png" /></i>微信登录</a><a href="javascript:" class="log_pop_regist">注册帐号</a></li>',
							'</ul>',
						'</div>',
						'<div class="login_pop regist_pop right_box">',
							'<h1>注册</h1>',
							'<!-- regist_sel -->',
							'<div class="regist_pop_sel">',
								'<a href="javacript:">找工作</a>',
								'<a href="javacript:">找人才</a>',
								'<p>请选择注册职业梦的目的</p>',
							'</div>',
							'<!-- wanted -->',
							'<ul class="row regist_pop_box" style="display:block">',
								'<li><input type="text" name="login_pop_email" placeholder="邮箱" /></li>',
								'<li><input type="password" name="login_pop_password" placeholder="密码" /></li>',
								'<li><input type="submit" name="wanted_pop" value="注册帐号" /></li>',
								'<li><img src="images/login/login_or.png" /></li>',
								'<li><a href="javascript:" class="log_pop_wechat"><i><img src="images/login/weichat_bai.png" /></i>微信登录</a><a href="javascript:" class="login_pop_alink">登录</a></li>',
							'</ul>',
							'<!-- recruit -->',
							'<ul class="row regist_pop_box">',
								'<li><input type="text" name="login_pop_email" placeholder="邮箱" /></li>',
								'<li><input type="password" name="login_pop_password" placeholder="密码" /></li>',
								'<li><input type="submit" name="recruit" value="注册帐号" /></li>',
								'<li><img src="images/login/login_or.png" /></li>',
								'<li><a href="javascript:" class="log_pop_wechat"><i><img src="images/login/weichat_bai.png" /></i>微信登录</a><a href="javascript:" class="login_pop_alink">登录</a></li>',
							'</ul>',
						'</div>',
					'</div>'].join('');
	//center				
	$(loginin).appendTo('body');	
	center($('.login_pop'));
}
function showlogin(){
	$('.login_pop,.login_pop_tit').fadeIn();
	$('.regist_pop').hide();
}
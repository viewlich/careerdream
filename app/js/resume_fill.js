/* -------------------------------------------------
 * JavaScript Document
 * resume_fill.js
 * -------------------------------------------------
*/
//resume_fill
$(document).ready(function(){
	//sex_select
	$('.fill_seb_name').click(function(){
		$(this).addClass('active').siblings().removeClass('active').parents('dl').find('dt img').attr('src','images/sex_b.png');
	});
	$('.fill_seg_name').click(function(){
		$(this).addClass('active').siblings().removeClass('active').parents('dl').find('dt img').attr('src','images/sex_g.png');
	});
	//fillin_page1
	$('#fillin_page1').click(function(){
		var isnull = $(this).parents('ul,dl').siblings().find('li i,dd i').parent().siblings().find('input');
		var isphone = /^[0-9\-\+]{8,15}$/;
        var istel = /^0[\d]{2,3}-[\d]{7,8}$/;
        var phone = $(this).parents('ul').siblings().find('li input[name=fill_phone]');
		for(i=0;i<isnull.length;i++){
    		if(isnull[i].value==''){
    			$(isnull[i]).addClass('redplace').attr('placeholder','内容不能为空').focus();
    			return false;
    		}
    	}
    	if(!(isphone.test($(phone).val())||istel.test($(phone).val()))){
    		$(phone).val('').addClass('redplace').attr('placeholder','电话或手机格式错误').focus();
    		return false;
    	}
    	//first success
    	$(this).parents('.fillin_page1').hide().siblings('.fillin_page2').show();
	});
	//fillin_page2
	$('.fillin_page2 ul li a.prevpage').click(function(){
		$('.fillin_page1').show().siblings('.fillin_page2').hide();
	});
	//add clone_school
	$('.fillin_page2 ul span a.add_school').click(function(){
		
	});
	//fillin_page2 
	$('#fillin_page2').click(function(){
		var isnull = $(this).parents('ul').siblings().find('li i').parent().siblings().find('input');
		for(i=0;i<isnull.length;i++){
    		if(isnull[i].value==''){
    			$(isnull[i]).addClass('redplace').attr('placeholder','内容不能为空').focus();
    			return false;
    		}
    	}
		$(this).parents('.fillin_page2').hide().siblings('.fillin_page3').show();
	});
	//fillin_page3
	$('.fillin_page3 ul li a.prevpage').click(function(){

		$('.fillin_page2').show().siblings('.fillin_page3').hide();
	});
	$('#fillin_page3').click(function(){
		$('.uber_box').fadeIn();
	});
});
/* -------------------------------------------------
 * JavaScript Document
 * manage.js
 * -------------------------------------------------
*/
$(document).ready(function(){
	//batch management
	$('.manlist_tit p em').click(function(){
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$(this).html('取消管理').siblings('i').fadeIn();
		}else{
			$('.manlist_tit p a.ma_all_sel').html('全选').removeClass('active');
			$(this).html('批量管理').siblings('i').fadeOut();
			$('.manue_jl li strong i').removeClass('active');
		}
	});
	//view contact information
	$('.manue_jl li strong a.look_lianxi').click(function(){
		$(this).parents('dd').siblings('p.contacth').slideToggle();
	});
	//select current
	$('.manue_jl li strong i').click(function(){
		$(this).toggleClass('active');
		$('.manlist_tit p i').fadeIn();
		$('.manlist_tit p em').addClass('active').html('取消管理');
		if($('.manue_jl li strong i.active').length==0){
			$('.manlist_tit p i').fadeOut();
			$('.manlist_tit p em').removeClass('active').html('批量管理');
		}
	});
	//select all
	$('.manlist_tit p a.ma_all_sel').click(function(){
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$(this).html('取消全选');
			$('.manue_jl li strong i').addClass('active');
		}else{	
			$(this).html('全选');		
			$('.manue_jl li strong i').removeClass('active');
		}
	});
	//Score
	count = new Array($('.manue_jl li span.jl_score b').length);
    for(var i = 0; i < count.length; i++) count[i] = 0;
    $('.manue_jl li span.jl_score b').each(function(e, d){
        count[e] = {num: 0, that: this};
        var atvalue = +$(this).attr("data-score");
        count[e].handle = setInterval('countDown('+ e +', '+ atvalue + ')', 40);
    });
    //Progress bar
    $('.manue_jl li span.jl_score').each(function(){
        $(this).find('i').animate({
            width:$(this).attr('data-percent')+'%'
        },400);
    });
    //into gray
    $('.manue_jl li span.jl_score b').each(function(){
        if(+$(this).attr("data-score")<85){
            $(this).css({'color':'#666'});
        }
    });
    //nature select
	$('.hrnewre dl dd.hrcom_nature a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});	
	//judge pay
	$(".hrnewre dl dd.hrcom_smonbox input").change(function(){
		var content = $(this).val();
		if (!isFinite(content) || parseInt(content) < 0){
			$(this).val('').addClass('redplace').attr('placeholder','格式错误！');
			return false;	
		}
		if (parseInt(content) > 1000){
			$(this).val('').addClass('redplace').attr('placeholder','薪酬单位为"K"');
			return false;	
		}
	});
    //new job
    $('.hrnewre dl dd input[name=hrcom_submit]').click(function(){    	
    	//jobinput isnull
    	var textnull = $('.hrnewre dl dt i').parent().siblings('dd').find('input,textarea,select');
    	for(i=0;i<textnull.length;i++){
    		if(textnull[i].value==''){
    			$(textnull[i]).addClass('redplace').attr('placeholder','内容不能为空').focus();
    			return false;
    		}
    	}
    	if(!($('.hrnewre dl dd.hrcom_nature a').hasClass('active'))){
    		$('.hrnewre dl dd.hrcom_nature i').removeClass('hidden').show();
    		$('html,body').animate({scrollTop: '0px'}, 800);
    		return false;
    	}
    	$('.hrnewre dl dd.hrcom_nature i').addClass('hidden'); 
    	alertsuc();
    	$('.dialog p em').html('发布成功'); 
    });
});
//Score
function countDown(i, atvalue) {
        $(count[i].that).html(count[i].num);
        count[i].num += 1;
            if(count[i].num > atvalue){
                clearInterval(count[i].handle); 
        }
}
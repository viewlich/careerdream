/* -------------------------------------------------
 * JavaScript Document
 * index.js
 * -------------------------------------------------
*/
$(function (){
	//delete resume
	$('.lf_fujian li.del_jl').hover(function(){
		$(this).find('em').toggle();
	});
	//animate
    $('.lf_online .trans_on').each(function(){
    	var widths = $(this).find('strong i').html();
        $(this).find('span b').animate({
            width:widths
        },400);
    });
    //left active
    $('.lf_online li').click(function(){
    	$(this).addClass('active').siblings().removeClass('active');
    });
    //person
    $('.resue_show_box i a.decom_person,.lf_online li.re_geren').click(function(){
    	$('.resue_show_box i a.decom_person').parents('.resue_show_box').slideUp().siblings().show();
    	$('.person_compile').parent().slideDown().siblings('.resume_jlcont').hide();
    });
    $('.person_compile dl dd input[name=res_person_cancer]').click(function(){
    	$(this).parents('.resume_jlcont').slideUp().siblings('.resue_show_box').show();
    });
    //ducation
    $('.resue_show_box i a.decom_ducation,.lf_online li.re_jiaoyu').click(function(){
    	$('.resue_show_box i a.decom_ducation').parents('.resue_show_box').slideUp().siblings().show();
    	$('.ducation_compile').parent().slideDown().siblings('.resume_jlcont').hide();
    });
    $('.ducation_compile dl dd input[name=res_ducation_button]').click(function(){
    	$(this).parents('.resume_jlcont').slideUp().siblings('.resue_show_box').show();
    });
    //work
    $('.resue_show_box i a.decom_work,.lf_online li.re_gongzuo').click(function(){
    	$('.resue_show_box i a.decom_work').parents('.resue_show_box').slideUp().siblings().show();
    	$('.work_compile').parent().slideDown().siblings('.resume_jlcont').hide();
    });
    $('.work_compile dl dd input[name=res_work_button]').click(function(){
    	$(this).parents('.resume_jlcont').slideUp().siblings('.resue_show_box').show();
    });
    //social
    $('.resue_show_box i a.decom_social,.lf_online li.re_shegong').click(function(){
    	$('.resue_show_box i a.decom_social').parents('.resue_show_box').slideUp().siblings().show();
    	$('.social_compile').parent().slideDown().siblings('.resume_jlcont').hide();
    });
    $('.social_compile dl dd input[name=res_social_button]').click(function(){
    	$(this).parents('.resume_jlcont').slideUp().siblings('.resue_show_box').show();
    });
    //skill
    $('.resue_show_box i a.decom_social,.lf_online li.re_qita').click(function(){
    	$('.resue_show_box i a.decom_skill').parents('.resue_show_box').slideUp().siblings().show();
    	$('.skill_compile').parent().slideDown().siblings('.resume_jlcont').hide();
    });
    $('.skill_compile dl dd input[name=res_skill_button]').click(function(){
    	$(this).parents('.resume_jlcont').slideUp().siblings('.resue_show_box').show();
    });
    //hobby
    $('.resue_show_box i a.decom_hobby,.lf_online li.re_xingqu').click(function(){
    	$('.resue_show_box i a.decom_hobby').parents('.resue_show_box').slideUp().siblings().show();
    	$('.hobby_compile').parent().slideDown().siblings('.resume_jlcont').hide();
    });
    $('.hobby_compile dl dd input[name=res_hobby_button]').click(function(){
    	$(this).parents('.resume_jlcont').slideUp().siblings('.resue_show_box').show();
    });
});
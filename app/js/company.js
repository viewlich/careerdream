/* -------------------------------------------------
 * JavaScript Document
 * company.js
 * -------------------------------------------------
*/
//company
$(document).ready(function(){
	//company persons
	$('.company_box ul li.select_persons a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	//company submit
	$('.company_box ul li a#compsur').click(function(){
		var compname = $('.company_box ul li input[name=compname]');
		var compfuli = $('.company_box ul li select[name=compfuli]');
		//comp name		
		if(compname.val()==""){
			compname.addClass('redplace').attr('placeholder','公司名称不能为空').focus();
			return false;
		}  
		//comp fuli
		if(compfuli.find('option:selected').length==0){
			$('.selectize-control input[type=text]').addClass('redplace').attr('placeholder','公司福利不能为空').focus();
			return false;
		}
		compfuli.find('option:selected').each(function(){
			console.log($(this).val());			
		});
		//success
		$('.company_box').hide();
		$('.company_hide').show();
		$('.company_h1').html('填写成功');
	});
});
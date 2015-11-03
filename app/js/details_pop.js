/* -------------------------------------------------
 * JavaScript Document
 * details.js
 * -------------------------------------------------
*/
$(document).ready(function(){
	uploadDelivery();
	//删除
	$('.lf_fujian .del_jl em').click(function(){
		$('.details_upbox,.upload_up04').fadeIn();
	});
	//上传
	$('.lf_fujian .add_jl').click(function(){
		$('.details_upbox,.upload_up01').fadeIn();
	});
	//判定选择文件类型
	$('#upfile').change(function(){
		var extend=this.value.substring(this.value.lastIndexOf(".") + 1);
		if(this.value==""){		
			$('.upload_up01 p em').html("您未选择任何简历文件");			
		}else{	
			if(!(extend == "pdf")){
				$(".upload_up01 input[name=upload_detalis_01]").attr('value','重新选择');
				$('.upload_up01 p em').html("您选择的文件类型有错误");		
			}else{			
				$('.upload_up01 p em').html(this.value);
				$(".upload_up01 input[name=upload_detalis_01]").css('display','none');
				$(".uploadFile").css('display','block');
			}
		}				
	});	
	//pop_tanchukuang
	$('.details_uptit,.details_upload h1 em img,.upload_up04 input[name=give_delet],.upload_up02 input[name=giveup_upload]').click(function(){
		$('.details_upbox').fadeOut();
	});	
	$('.details_upload .upload_up02 dl dd a').click(function(){
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
		if($(this).hasClass('active')){
			$(this).css({'background-image':'url(images/upload_select_act.png)'});
			$(this).parent().siblings().find('a').css({'background-image':'url(images/upload_select_nor.png)'});
		}	
	});
});
function uploadDelivery(){
	var temples = '<div class="details_upbox">'+
						'<div class="details_uptit"></div>'+
						'<div class="details_upload">'+
							'<h1><i>上传简历</i><em><img src="images/x_dot.png" /></em></h1>'+
							'<!-- 上传 -->'+
							'<div class="upload_pop upload_up01">'+
								'<p><i>您还可以上传<b>3</b>份简历</i><em>上传附件简历，文件大小需小于5M，格式为PDF。</em></p>'+
							'</div>'+
							'<span class="span_upload upload_up01"><input type="file" name="file" id="upfile" accept="application/pdf,application/msword,application/vnd.ms-works">'+
							'<input type="button" value="上传简历" name="upload_detalis_01" onclick=\'document.getElementById("upfile").click()\' />'+
							'<input class="uploadFile" type="button" id="uploadFile" value="确认上传" style="display:none" /></span>'+
							'<!-- 投递 -->'+
							'<div class="upload_pop upload_up02">'+
								'<p><i>您的个人信息中</i><strong><b>工作年限</b>与该职位要求不匹配，确认投递么？</strong></p>'+
							'</div>'+
							'<span class="span_upload upload_up02"><input type="button" value="继续投递" name="continue" /><input type="button" value="放弃投递" name="giveup_upload" /></span>'+
							'<!-- 选择 -->'+
							'<div class="upload_pop upload_up03">'+
								'<dl>'+
									'<dt>选择简历：</dt>'+
									'<dd><a href="javascript:">在线简历</a></dd>'+
									'<dd><a href="javascript:"><select>'+
										'<option value="附件简历1">附件简历1</option>'+
										'<option value="附件简历2">附件简历2</option>'+
									'</select></a></dd>'+
								'</dl>'+
							'</div>'+
							'<span class="span_upload upload_up03"><input type="button" value="投递简历" name="delivery" class="upload_delivery" /></span>'+
							'<!-- 上传 -->'+
							'<div class="upload_pop upload_up04">'+
								'<p>确定要删除该简历吗？</p>'+
							'</div>'+
							'<span class="span_upload upload_up04"><input type="button" value="确定" name="delet_deli" /><input type="button" value="取消" name="give_delet" /></span>'+
						'</div>'+
					'</div>'
	$(temples).appendTo('body');
}
/* -------------------------------------------------
 * JavaScript Document
 * index.js
 * -------------------------------------------------
*/
//menu_left
jQuery(function($){
	//menu
	$('.menu li').hover(
		function(){
			$(this).append('<div class="menulih">'+ $(this).find('span').text() +'</div>');
			$(this).find('p').show();
		},
		function(){
			$(this).find('.menulih').remove();
			$(this).find('p').hide();
		}
	);
	//search
	$('.search input:text').on({
		focus:function(){
			$(this).parent().css({'border-bottom-color':'#7399c6'});
			$(this).siblings('input:submit').css({'background-position':'-10px -35px'});
		},
		blur:function(){
			$(this).parent().css({'border-bottom-color':'#c5c5c5'});
			$(this).siblings('input:submit').css({'background-position':'-10px -6px'});
		}
	});
});
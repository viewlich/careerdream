/* -------------------------------------------------
 * JavaScript Document
 * delivery.js
 * -------------------------------------------------
*/
//delivery
$(function (){
	//delivery slide
	$('.delivery_list li strong a').click(function(){
		$(this).parents('.delivery_list').find('dl').slideToggle();
	});
});
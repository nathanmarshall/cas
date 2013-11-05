/*
	Main JS file for PHP template package

*/

/* Slide ut menu JS */

	$(function(){
	
		$('.toggle-nav').click(function(){
			$('.header, .content-wrapper').toggleClass('slide');
		
	});
	
	
	/* Expand JS */
	
	$(function(){
		
		$('article').click(function(){
			
			$(this).children('div').slideToggle('fast');
			
			$(this).children('span').toggle(function(){
				$(this).text('-');
			}, function(){
				$(this).text('+');
				
			});
			
		});
		
	});
	
	
});
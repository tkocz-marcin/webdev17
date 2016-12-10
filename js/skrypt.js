/* sticky menu*/	
$(document).ready(function() {
   var stickyNavTop = screen.height - 50;
   var stickyNav = function(){
   var scrollTop = $(window).scrollTop();




   if (scrollTop > stickyNavTop) { 
		$('.nav').removeClass('no-display');
   } else {
      $('.nav').addClass('no-display');
    }
   };
   stickyNav();
   $(window).scroll(function() {
      stickyNav();
   });
   });

function opacityContent(){
	var contents = document.querySelectorAll('.content'),
		scrollTop = $(window).scrollTop(),
		topShow = 0,
		i = 0;
		
		for(i=0; i < contents.length; i++) {
			if(i == 0) {
			topShow = $(contents[i]).position().top - 100;
			} else {
				topShow = $(contents[i-1]).position().top + i*100;
			}
			   if (scrollTop > topShow) { 
					$(contents[i]).removeClass('opacity');
				} else {
					$(contents[i]).addClass('opacity');
				}		
		}
	
	  
};
   
/* scroll \/ */
jQuery(function($)
	{
		$.scrollTo(0);			
		$('#about_us_arrow').click(function() { $.scrollTo($('#about_us'), 300); });
		$('#nav_1').click(function() { $.scrollTo($('#about_us'), 500); });
		$('#nav_2').click(function() { $.scrollTo($('#who_we_are'), 500); });
		$('#nav_3').click(function() { $.scrollTo($('#what_we_do'), 500); });
		$('#nav_4').click(function() { $.scrollTo($('#our_work'), 500); });
		$('#nav_5').click(function() { $.scrollTo($('#client'), 500); });
		$('#nav_6').click(function() { $.scrollTo($('#get_in_touch'), 500); });


	}
);
let isFirefox = typeof InstallTrigger !== 'undefined';

$(window).scroll(function() {
    if(!isFirefox) {
  		opacityContent();
	}
   });

window.onload = function() {
	if(!isFirefox) {
  		opacityContent();
	}
};
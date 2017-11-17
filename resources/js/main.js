$(document).ready(function(){
  $('.carousel').slick({
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 4000,
    	arrows: false,
    	draggable: false,
    	pauseOnFocus: false,
    	pauseOnHover: false
  });
  var scrollValue = 0;
  $(window).scroll(function(){
    	var scrollTop = $(this).scrollTop();
    	if (scrollTop - scrollValue > 50){
      		var navHeight = $('.navbar').css('height');
      		$('.navbar').animate({top: '-' + navHeight}, 150);
      		scrollValue = scrollTop;
    	} else if (scrollValue - scrollTop > 50) {
      		$('.navbar').animate({top: '0px'}, 150);
      		scrollValue = scrollTop;
    	}
  });
  
});
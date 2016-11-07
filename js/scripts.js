$(document).ready(function(){

	$('#main .row .img').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});

	$('.range-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		focusOnSelect: false,
		draggable: true,
		infinite: true,
		fade: true,
		cssEase: 'linear',
		adaptiveHeight: true
	});

	var indexMax = $('.range-slide .slide-item').length;
	$(".range-slide .slide-item").each(function(index) {
		$(this).children(".slidenumber").text(index+1 + " / " + indexMax);
	});

	$(".sub-nav li a").click(function(e){
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top;
		$("html, body").stop().animate({ 
			scrollTop: offsetTop
		}, 800);
		e.preventDefault();
	});

});

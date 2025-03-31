$(function(){
	let mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200,
		loop: true,
		autoplay: {
			delay: 5000
		},
		on: {
			init: function(){
				$(".main_slider .progress_bar span").animate({ width: "100%" }, 5000);
			},
			slideChangeTransitionStart: function(){
				$(".main_slider .progress_bar span").stop()
				.css({ width: "0%" })
				.animate({ width: "100%" }, 5000);
			}
		}
	});

	$(".main_slider .prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});

	$(".main_slider .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
});
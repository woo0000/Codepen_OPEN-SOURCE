$(function(){
	let mainCurrent, mainTotal;

	const mainSwiper=new Swiper(".mainSwiper", {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		on: {
			init: function(){
				mainCurrent=this.realIndex+1;
				mainTotal=this.slides.length;
				$(".main_slider .account .current").text(mainCurrent);
				$(".main_slider .account .total").text(mainTotal);
			},
			slideChange: function(){
				mainCurrent=this.realIndex+1;
				$(".main_slider .account .current").text(mainCurrent);
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

	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});
});
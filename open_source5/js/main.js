$(function(){
	let listSwiper = null;

	function initSwiper(){
		if (window.innerWidth < 767){
			if(listSwiper == null){
				listSwiper=new Swiper(".listSwiper", {
					slidesPerView: 1.5,
					spaceBetween: 15
				});
			}
		}
		else{
			if(listSwiper != null){
				listSwiper.destroy();
				listSwiper=null;
			}
		}
	}

	initSwiper();

	$(window).resize(initSwiper);
});
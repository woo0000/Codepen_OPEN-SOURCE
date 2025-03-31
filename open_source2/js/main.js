$(function(){
	let isMobile;

	$(window).resize(function(){
		if(window.innerWidth > 1125){
			if(isMobile != false){
				isMobile=false;

				if($(".tab").hasClass("close") == true || $("nav > ul > li").hasClass("active") == true){
					$("nav > ul > li").each(function(index, item){
						let $item=$(item);

						$item.removeClass("active");
						$item.find("ul").removeAttr("style");
					});

					$("body").removeClass("fixed");
					$("#header").removeClass("active");
					$(".tab").removeClass("close");
				}
			}
		}
		else{
			if(isMobile != true){
				isMobile=true;
			}
		}
	});

	$(window).trigger("resize");

	$("nav > ul > li").hover(
		function(){
			if(isMobile == false){
				$("#header").addClass("active");
				$(this).addClass("active");
			}
		},
		function(){
			if(isMobile == false){
				$(this).removeClass("active");
			}
		}
	);

	$("#header").mouseleave(function(){
		if(isMobile == false){
			$("#header").removeClass("active");
		}
	});

	$("nav > ul > li > a").focusin(function(){
		if(isMobile == false){
			$(this).parent().addClass("active");
			$("#header").addClass("active");
		}
	});

	$("nav li li:last-child").focusout(function(){
		if(isMobile == false){
			$(this).parent().parent().removeClass("active");
		}
	});

	$("nav li:last-child li:last-child").focusout(function(){
		if(isMobile == false){
			$("#header").removeClass("active");
		}
	});

	$(".language .current").click(function(){
		$(this).next("ul").slideToggle(300);
	});

	let languageDom=document.querySelector(".language");
	let currentDom=languageDom.querySelector(".current");

	$(document).click(function(e){
		if(e.target === currentDom || e.target.closest(".language") === languageDom) return;

		$(".language ul").slideUp(300);
	});

	$(".tab").click(function(e){
		e.preventDefault();

		if($(".tab").hasClass("close") == false){
			$("body").addClass("fixed");
			$("#header").addClass("active");
			$(".tab").addClass("close");
		}
		else{
			$("body").removeClass("fixed");
			$("#header").removeClass("active");
			$(".tab").removeClass("close");

			$("nav > ul > li").each(function(index, item){
				let $item=$(item);

				$item.removeClass("active");
				$item.find("ul").hide();
			});
		}
	});

	$("nav > ul > li").click(function(e){
		e.preventDefault();

		if(isMobile == true){
			if($(this).hasClass("active") == false){
				$("nav > ul > li").removeClass("active");
				$(this).addClass("active");
				$("nav li ul").slideUp(300);
				$(this).find("ul").slideDown(300);
			}
			else{
				$(this).removeClass("active");
				$(this).find("ul").slideUp(300);
			}
		}
	});

	let prevScrollY=0;
	let direction="";

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t > window.innerHeight){
			let currentScrollY=t;

			if(currentScrollY > prevScrollY){
				if(direction != "down"){
					direction="down";

					$("#header").css({ top: "-100%" });
					$("#header").removeClass("fixed");
				}
			}
			else{
				if(direction != "up"){
					direction="up";

					$("#header").css({ top: 0 });
					$("#header").addClass("fixed");
				}
			}

			prevScrollY=t;
		}
		else{
			if(t == 0){
				if($("#header").hasClass("fixed") == true){
					$("#header").removeClass("fixed");
				}
			}
		}
	});
});
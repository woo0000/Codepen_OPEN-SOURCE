$(function(){
	let isMobile;

	$(window).resize(function(){
		if(window.innerWidth > 780){
			if(isMobile != false){
				isMobile=false

				if($(".tab").hasClass("active") == true){
					$("nav > ul > li").each(function(index, item){
						let $item=$(item);

						$item.removeClass("active");
						$item.find("ul").hide();
					});

					$("body").removeClass("fixed");
					$("nav").removeClass("active");
					$(".tab").removeClass("active");
					$(".dimmed").removeClass("active");
				}
			}
		}
		else {
			if(isMobile != true){
				isMobile=true
			}
		}
	});

	$(window).trigger("resize");

	$("nav > ul > li").hover(
		function(){
			if(isMobile == false){
				$("#header").addClass("active");
				$(this).addClass("active");
				$(this).find("ul").slideDown(300);
			}
		},
		function(){
			if(isMobile == false){
				$("header nav > ul > li").removeClass("active")
				$(this).find("ul").stop().slideUp(300);
			}
		}
	);

	$("#header").mouseleave(function(){
		if(isMobile == false){
			$("header").removeClass("active");
		}
	});

	$("nav > ul > li > a").focusin(function(){
		if(isMobile == false){
			if($(this).parent().index() == 0){
				$("header").addClass("active");
			}

			$(this).parent().addClass("active");
			$(this).next("ul").stop().slideDown(300);
		}
	});

	$("nav li li:last-child").focusout(function(){
		if(isMobile == false){
			if($(this).parent().parent().index() == $("nav > ul > li").length-1){
				$("header").removeClass("active");
			}

			$(this).parent().parent().removeClass("active");
			$(this).parent().stop().slideUp(300);
		}
	});

	$(".tab").click(function (e) {
		e.preventDefault();

		if(isMobile == true){
			if($(".tab").hasClass("active") == false){
				$("body").addClass("fixed");
				$("nav").addClass("active");
				$(".tab").addClass("active");
				$(".dimmed").addClass("active");
			}
			else{
				$("nav > ul > li").each(function(index, item){
					let $item=$(item);

					$item.removeClass("active");
					$item.find("ul").hide();
				});

				$("body").removeClass("fixed");
				$("nav").removeClass("active");
				$(".tab").removeClass("active");
				$(".dimmed").removeClass("active");
			}
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
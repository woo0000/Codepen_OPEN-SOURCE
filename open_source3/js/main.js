$(function(){
	function GetCookie(name){
		let value=null, search=name+"=";

		if(document.cookie.length > 0){
			let offset=document.cookie.indexOf(search);

			if(offset != -1){
				offset+=search.length;
				let end=document.cookie.indexOf(";", offset);

				if(end == -1) end=document.cookie.length;
				value=unescape(document.cookie.substring(offset, end));
			}
		} return value;
	}

	function setCookie(name, value, expiredays){
		let days=expiredays;
		let expires;

		if(days){
			let date=new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires="; expires="+date.toGMTString();
		}
		else{
			expires="";
		}

		document.cookie=name+"="+value+expires+"; path=/";
	}

	if(GetCookie("popClose") != "yes"){
		$("body").addClass("fixed");
		$(".popup").addClass("visible");
		$(".dim").addClass("visible");
	}

	$(".popup .close").click(function(e){
		e.preventDefault();

		$("body").removeClass("fixed");
		$(".popup").removeClass("visible");
		$(".dim").removeClass("visible");
	});

	$(".popup .today").click(function(e){
		e.preventDefault();

		setCookie("popClose", "yes", 1);

		$("body").removeClass("fixed");
		$(".popup").removeClass("visible");
		$(".dim").removeClass("visible");
	});

	$(".popup .week").click(function(e){
		e.preventDefault();

		setCookie("popClose", "yes", 7);

		$("body").removeClass("fixed");
		$(".popup").removeClass("visible");
		$(".dim").removeClass("visible");
	});

	$("#header .tab").click(function(e){
		e.preventDefault();

		$("body").toggleClass("fixed");
		$(".menu").toggleClass("active");
		$(".tab").toggleClass("active");

		if($("#gnb > ul > li").hasClass("active")){
			$("#gnb ul ul").hide();
			$("#gnb > ul > li").removeClass("active");
		}
	});

	$("#gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
});
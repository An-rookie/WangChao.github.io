window.onload=function(){
	$(".review").mouseover(function(){
		$(".teste").slideDown("fast");
		$(".span6 li").css("color","#101010");
	});
	$(".review").mouseout(function(){
		$(".teste").hide();
		$(".span6 li").css("color","#101010");
	});
	$(".teste").mouseover(function(){
		$(".teste").show();
		$(".span6 li").css("color","#101010");
	});
	$(".teste").mouseout(function(){
		$(".teste").hide();
		$(".span6 li").css("color","white");
	});
	$(".fixed").mouseover(function(){
		$(".assistant-icon").slideDown("fast");
		$(".fixed>img").hide("fast");
	});
	$(".assistant-icon").mouseleave(function(){
		$(".assistant-icon").hide();
		$(".fixed>img").show();
	});
	
	$(".nav-tabs").children("li").hover(function(){
		var str=$(this).find("a").children("img").attr("src");
		console.log(str);
		$(this).find("img").attr("src",str.replace(/off/,"on"));
		$(this).find("ul").stop().slideDown();
//		$(".nav-tabs>li>ul").show();
	},function(){
		var str=$(this).find("a").children("img").attr("src");
//		console.log(str);
		$(this).find("img").attr("src",str.replace(/on/,"off"));
		$(this).find("ul").stop().hide();
	});
	$(".services b").hover(function(){
		$(".services>div>img").show();
	},function(){
		$(".services>div>img").hide();
	});
	$(".foot_buttom").click(function(){
		$(".foot_buttom").hide();
	});
	$(window).scroll(function(){
		$(".foot_buttom").show();
	})
}

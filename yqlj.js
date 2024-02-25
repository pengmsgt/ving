$(function(){
	//drop事件
	$(".qTwZ .ui-drop").drop({
		manualControls:".ui-dropHd",
		addClassName:"activeDrop"
	});
	//网站群换屏效果
var yQlJTabTimer,
	    yQlJTabOne=$(".yQlJTab li").eq(0),
		tabsLiListNrlength=0,
		yQlJTabTwo,
		yQlJTabSpace=0,
		yQlJTabNr="",
		yQlJTabList="";
		
	$(".yQlJTab li").hover(function(){
		$(".qTwZ .ui-drop").children(".ui-dropHd").removeClass("activeDrop");
		$(".qTwZ .ui-drop").children(".ui-dropNr").hide();
		
		yQlJTabOne.children(".tabsLi").stop().hide();
		$(this).children(".tabsLi").show().animate({height:265});
		yQlJTabTwo=$(this);

                $(".yQlJTab").stop().animate({height:312});
		yQlJTabSpace=0;
		$(".tabsLiListNr").css("left","0px");
		$(".Aprev").hide();
		$(".Anext").show();
		if($(this).find(".tabsLiListNr").width()<=$(this).find(".tabsLiList").width())
		{
		   $(".Anext").hide();
		}
	},function(){
		yQlJTabTwo.children(".tabsLi").stop();
		yQlJTabTwo.children(".tabsLi").animate({height:0},function(){
			yQlJTabTwo.children(".tabsLi").hide();
		});
		yQlJTabOne=$(this);
                $(".yQlJTab").stop().animate({height:40});
		yQlJTabSpace=0;
		$(".tabsLiListNr").css("left","0px");
		$(".Aprev").hide();
		$(".Anext").show();
		if($(this).find(".tabsLiListNr").width()<=$(this).find(".tabsLiList").width())
		{
		   $(".Anext").hide();
		}
	});
	$(".tabsLiListNr").each(function() {
		tabsLiListNrlength=0;
        for(var i=0;i<$(this).find("dl").length;i++)
		{
			tabsLiListNrlength+=$(this).find("dl").eq(i).outerWidth();
		}
		$(this).width(tabsLiListNrlength);
    });
	$(".yQlJTab").find(".tabsLi").each(function() {
		yQlJTabThis=$(this);
	    $(this).find(".tabsLiListNr").css("left","0px");
		$(this).find(".Aprev").hide();
		if($(this).find(".tabsLiListNr").width()<=$(this).find(".tabsLiList").width())
		{
			$(this).find(".Anext").hide();
		}
		$(this).find(".Anext").click(function(){
			yQlJTabNr=$(this).parents(".tabsLi").find(".tabsLiListNr");
			yQlJTabList=$(this).parents(".tabsLi").find(".tabsLiList");
			$(this).parents(".tabsLi").find(".Aprev").show();
			if(!yQlJTabNr.is(":animated"))
			{
				if((yQlJTabNr.width()-yQlJTabSpace-yQlJTabList.width())<yQlJTabList.width())
				{
					yQlJTabSpace=yQlJTabNr.width()-yQlJTabList.width();
					$(this).hide();
				}else{
					yQlJTabSpace+=yQlJTabList.width();
				}
				yQlJTabNr.animate({left:-yQlJTabSpace});
			}
		})
		$(this).find(".Aprev").click(function(){
			yQlJTabNr=$(this).parents(".tabsLi").find(".tabsLiListNr");
			yQlJTabList=$(this).parents(".tabsLi").find(".tabsLiList");
			$(this).parents(".tabsLi").find(".Anext").show();
			if(!yQlJTabNr.is(":animated"))
			{
				if(yQlJTabSpace<=yQlJTabList.width())
				{
					yQlJTabSpace=0;
					$(this).hide();
				}else{
					yQlJTabSpace-=yQlJTabList.width();
				}
				yQlJTabNr.animate({left:-yQlJTabSpace});
			}
		})
    });	
});
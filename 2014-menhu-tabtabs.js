// JavaScript Document

// JavaScript Document
//本插件支持jquery1.8.0以下
(function($){
	$.fn.tabtabs=function(options){
		
		var defaults={
		}
		var hcy = $.extend({},defaults,options);
		
		return this.each(function () {
			  var $this=$(this),
				  $tab=$this.children(".tab"),
				  $tabUl=$tab.children("ul"),
				  $tabLi=$tabUl.children("li"),
				  tabLiLeft,
				  
				  $tabs=$this.children(".tabs"),
				  $tabsLi=$tabs.children(".tabsLi");
				  
			  $tabLi.hover(function(){
				  
				  if(!$(this).hasClass("active"))
				  {
					  $(this).parent().children("li").removeClass("active");
					  $(this).addClass("active");
					  $(this).parents(".tab").next().children(".tabsLi").removeClass("active").eq($(this).index()).addClass("active");
					  
				  }
			      return false;
			   });
        });
	};
})(jQuery)
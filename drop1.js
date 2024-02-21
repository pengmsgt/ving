// JavaScript Document

(function($){
	$.fn.drop=function(options){
		var defaults={
			manualControls:".DivSpan",
			addClassName:"dropHdActive"
		}
		var hcy = $.extend({},defaults,options);
		
		var _drop=this,
			_dropHd=_drop.children(".ui-dropHd"),
			_manualControls=_drop.find(hcy.manualControls),
			_dropNr=_drop.children(".ui-dropNr"),
			$this
			
			_manualControls.click(function(){
				if(!$this){$this=this;}
				if($this==this)
				{
					if($(this).parents(".ui-drop").children(".ui-dropHd").hasClass(hcy.addClassName))
					{
						 $(this).parents(".ui-drop").children(".ui-dropHd").removeClass(hcy.addClassName);
						 $(this).parents(".ui-drop").children(".ui-dropNr").hide();
					}else
					{
						$(this).parents(".ui-drop").children(".ui-dropHd").addClass(hcy.addClassName);
						$(this).parents(".ui-drop").children(".ui-dropNr").show();
					}
				}else
				{
					$($this).parents(".ui-drop").children(".ui-dropHd").removeClass(hcy.addClassName);
					$($this).parents(".ui-drop").children(".ui-dropNr").hide();
					$(this).parents(".ui-drop").children(".ui-dropHd").addClass(hcy.addClassName);
					$(this).parents(".ui-drop").children(".ui-dropNr").show();
				}
				$this=this
			})
			_dropNr.find("ul").delegate("li","click",function(){
				$(this).parents(".ui-drop").children(".ui-dropHd").find(".pHead").html($(this).find("a").html());
				$(this).parents(".ui-drop").children(".ui-dropHd").removeClass(hcy.addClassName);
				$(this).parents(".ui-dropNr").hide();
			})
			
			
		return this;
	};
})(jQuery)
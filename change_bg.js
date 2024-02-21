// JavaScript Document




/*
*
* by hechaoyu
* Version: 1.1
* Last Changed by : hechaoyu
* Last Time:2014-9-26 16:00
*
*
* usage1: 
* $(".ui-bg").changeBg({
*  'picSrc': [5]        一个参数的时候是指图片的总数量
* });

* usage2: 
* $(".ui-bg").changeBg({
*  'picSrc': [2,10,15]   第一个参数是图片的开始位置（包括其本身）；第二个参数是参与播放的图片数量；第三个参数是图片的总数量
* });
*
*/

(function($){
	$.fn.changeBg=function(options){

		var defaults={
                        picTime:10000,
			picSrc:[5]
                        
                        
		}
		var hcy = $.extend({},defaults,options);
		
		
		
		var $this=$(this),
		    Num=getCookie("Num"),
		    oHtml="",
			picSrc=hcy.picSrc,
                        picTime=hcy.picTime,
                        iNumhidden=1;

                       /*专题LOGO消失开始*/
                       if(iNumhidden==0)
                       {
                            $this.parents("body").find(".TyRzlogo").hide();
                       }else if(iNumhidden==1)
                       {
                            $this.parents("body").find(".TyRzlogo").show();
                       }
                       
                       /*专题LOGO消失结束*/
                           

			if(picSrc.length==1)
			{
				if(picSrc[0]==0)
				{
					return false;
				}else if(picSrc[0]==1)
				{
				   $this.append('<ul><li class="ui-bg-li0" style="display:block;"></li></ul>');
				   return false;
				}else
				{
				  for(var i=0;i<picSrc[0];i++)
				  {
					  oHtml+='<li class="ui-bg-li'+i+'"></li>\n';
				  }
				}
			}else if(picSrc.length==5)
			{
				if(picSrc[1]<=picSrc[2])
				{
					for(var i=picSrc[0];i<picSrc[1]+picSrc[0];i++)
					{
						oHtml+='<li class="ui-bg'+i+'"></li>\n';
					}
				}else
				{
					alert("参数不对");
				}
			}else
			{
				alert("参数不对");
			}
			
			$this.append('<ul>'+oHtml+'</ul>');
			
			if(Num=="")
			{
				setCookie("Num",0);
				$this.find("ul li").eq(Num).show();
				showTime();
			}else
			{
				$this.find("ul li").fadeOut();
				$this.find("ul li").eq(Num).show();
				showTime();
			}
			
			$(window).unload(function(){
				clearInterval($this.time);
			});
			
			function showTime(){
				clearInterval($this.time);
				$this.time=setInterval(function(){
					if(Num>=$this.find("ul li").length-1)
					{
						Num=0;
					}else
					{
						Num++;
					}
                                        
					$this.find("ul li").fadeOut("1000");
					$this.find("ul li").eq(Num).fadeIn("1000");
					setCookie("Num",Num);
				},picTime)
			}
		return this;
	};
	
	function setCookie(name, value, iDay)
	{
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=name+'='+value+';expires='+oDate+'; path="/"';
	}
	function getCookie(name)
	{
		var arr=document.cookie.split('; ');
		var i=0;
		for(i=0;i<arr.length;i++)
		{
			var arr2=arr[i].split('=');
			if(arr2[0]==name)
			{
				return arr2[1];
			}
		}
		return '';
	}
	function removeCookie(name)
	{
		setCookie(name, '1', -1);
	}
})(jQuery)
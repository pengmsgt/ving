document.write("<script src=\"http://www.hepu.gov.cn/images/jquery-2.0.0.min.js\"></script>"); 
setTimeout(function(){ 
$(function() {
	formatContent();
});

function formatContent() {
	formatImg();
	 //addTrsEditor();
     //replaceBrTag();
	  //formatDivContent();
	  //formatPContent();
	 //formatSpanContent();
	 //formatFontContent();
	 //formatBContent();
	 //formatStrongContent();
}

/*
 * 格式化图片
 */
function formatImg() {
    //显示图片的最大宽度
    var maxWidth = 800;
	$(".TRS_Editor").each(function() {
		var imgs = $(this)[0].getElementsByTagName("img");
		for(var i = 0, len = imgs.length; i < len; i++) {
			resizeImg($(imgs[i]), maxWidth);
			var parentObj = $(imgs[i]).parent();
			addImgClass(parentObj);
		}
	});
}

/**
 * 图片添加样式
 */
function addImgClass(parentObj) {
	var parentTagName = parentObj[0].tagName;
	if(parentTagName.toUpperCase() == 'A' || parentTagName.toUpperCase() == 'SPAN'
		|| parentTagName.toUpperCase() == 'FONT') {
		var obj = parentObj.parent();
		addImgClass(obj);
	} else {
		parentObj.attr("align", "center");
		parentObj.css({
			"text-align" : "",
			"font-size":"16px",
			"line-height":"30px",
			"font-family":"Microsoft YaHei,SimSun,Arial Narrow"
		});
	}
}

/*
 * 缩放图片
 */
function resizeImg(obj, maxWidth) {
    //缩放比例
    var ratio = 0;
    var width = $(obj).width();
    var height= $(obj).height();
    if(width > maxWidth) {
	 ratio = maxWidth / width;
         $(obj).attr("width", maxWidth);
         $(obj).attr("height", height*ratio);
	 //$(this).css("width", maxWidth);
    }
}

/**
 * 添加TRS_Editor div
 */
function addTrsEditor() {
	$('.TRS_PreAppend').css('overflow-x', '');
	var editorObj = $(".TRS_Editor").html();
	if(typeof(editorObj)=="undefined") {
        var htmlContent = $("#doccontent").html();
        $("#doccontent").html("<div class=\"TRS_Editor\">" + htmlContent + "</div>");
    }
	
	$(".TRS_Editor").each(function() {
        $(this).css({
             "font-size":"16px",
             "line-height":"30px",
             "font-family":"Microsoft YaHei,SimSun,Arial Narrow",
	         "color":"#333",
             "margin":"0 0 10px"
        });
    });
}

/**
 * 正文内容替换br标签为p标签
 */
function replaceBrTag() {
	$(".TRS_Editor").find("br").each(function() {
		$(this).removeAttr("style");
	});

    $(".TRS_Editor").each(function() {
        var content = $(this).html();
        content = content.replace(/<br>/gi, "<br>");
        var contentArr = content.split("<br>");
        var formatHtml = "";
		//加上p标签
        for(var i = 0, len = contentArr.length; i < len; i++) {
			var formatContentArr = handleFirstBr(contentArr[i]);
			if(formatContentArr.length == 1) {
				formatHtml += "<p>"
				formatHtml += formatContentArr[0];
				formatHtml += "</p>";
			} else {
				for(var j = 0; j < formatContentArr.length; j++) {
					formatHtml += "<p>"
					formatHtml += formatContentArr[j];
					formatHtml += "</p>";
				}
			}
        }
        $(this).html(formatHtml);
    });
}

function handleFirstBr(content) {
	var contentArr = new Array();
	if(content.length == 0) {
		contentArr[0] = content;
		return contentArr;
	}
	var lastIndex = content.lastIndexOf("</div>");
	if(lastIndex == -1) {
		contentArr[0] = content;
		return contentArr;
	}
	var formatContent1 = content.substring(0, lastIndex+6);
	contentArr[0] = formatContent1;
	var formatContent2 = content.substring(lastIndex+6);
	contentArr[1] = formatContent2;
	return contentArr;
}

/**
 * 格式化div标签内容
 */
function formatDivContent() {
	$(".TRS_Editor").each(function() {
		var divs = $(this)[0].getElementsByTagName("div");
		for(var i = 0, len = divs.length; i < len; i++) {
			var divContent = $(divs[i]).html();
			$(divs[i]).css({
				"font-size":"16px",
				"line-height":"30px",
				"color":"#333",
				"font-family":"Microsoft YaHei,SimSun,Arial Narrow",
				"margin":"0 0 10px",
				"overflow-x":""
			});
			var alignVal = $(divs[i]).attr("align");
			if(typeof(alignVal) == 'undefined' || alignVal == '' ||
				alignVal == 'justify' || alignVal == 'JUSTISF') {
				$(divs[i]).html(trimContent(divContent));
				$(divs[i]).css({
					// "text-indent":"2em"
				});
			}else if(alignVal == 'left'){
				pContent = trimContent(divContent);
				$(divs[i]).html(divContent);
				$(divs[i]).css({
					// "text-indent":"0"
				});
			}
		}
	});
}

/**
 * 格式化p标签内容
 */
function formatPContent() {
	$(".TRS_Editor").each(function() {
		var paragraphs = $(this)[0].getElementsByTagName("p");
		for(var i = 0, len = paragraphs.length; i < len; i++) {
			var pContent = $(paragraphs[i]).html();
			//alert(pContent);
			if(typeof(pContent) != 'undefined') {
				$(paragraphs[i]).css({
					"font-size":"16px",
					"line-height":"30px",
					"color":"#333",
					"font-family":"Microsoft YaHei,SimSun,Arial Narrow",
					"margin":"0 0 10px"
				});
				var alignVal = $(paragraphs[i]).attr("align");
				if(typeof(alignVal) == 'undefined' || alignVal == '' ||
					alignVal == 'justify' || alignVal == 'JUSTISF') {
					pContent = trimContent(pContent);
					$(paragraphs[i]).html(pContent);
					$(paragraphs[i]).css({
						// "text-indent":"2em"
					});
				}else if(alignVal == 'left'){
					pContent = trimContent(pContent);
					$(paragraphs[i]).html(pContent);
					$(paragraphs[i]).css({
						// "text-indent":"0"
					});
				}
			}
		}
	});
}

/**
 * 格式化span标签内容
 */
function formatSpanContent() {
	$(".TRS_Editor").each(function() {
		var spans = $(this)[0].getElementsByTagName("span");
		for(var i = 0, len = spans.length; i < len; i++) {
			var spanContent = $(spans[i]).html();
			if(typeof(spanContent) != 'undefined') {
				$(spans[i]).css({
					"font-size":"16px",
					"line-height":"30px",
					"color":"#333",

					"margin":"0 0 10px",
					"display":"initial"
				});
				/*
				var alignVal = $(spans[i]).attr("align");
				if(typeof(alignVal) == 'undefined' || alignVal == '') {
					spanContent = trimContent(spanContent);
					$(spans[i]).html(spanContent);
					$(spans[i]).css({
						"text-indent":"2em"
					});
				}*/
				var parentAlignVal = $(spans[i]).parent().attr("align");
				if(typeof(parentAlignVal) == 'undefined' || parentAlignVal == '' ||
					parentAlignVal == 'justify' || parentAlignVal == 'JUSTISF') {
					spanContent = trimContent(spanContent);
					$(spans[i]).html(spanContent);
					$(spans[i]).css({
						// "text-indent":"2em"
					});
				}
			}
		}
	});
}

/**
 * 格式化font标签内容
 */
function formatFontContent() {
	$(".TRS_Editor").each(function() {
		var fonts = $(this)[0].getElementsByTagName("font");
		for(var i = 0, len = fonts.length; i < len; i++) {
			var fontContent = $(fonts[i]).html();
			if(typeof(fontContent) != 'undefined') {
				$(fonts[i]).css({
					"line-height":"30px",
					"font-family":"Microsoft YaHei,SimSun,Arial Narrow",
					"margin":"0 0 10px",
					"display":"initial"
				});
				var parentAlignVal = $(fonts[i]).parent().attr("align");
				if(typeof(parentAlignVal) == 'undefined' || parentAlignVal == '' ||
					parentAlignVal == 'justify' || parentAlignVal == 'JUSTISF') {
					fontContent = trimContent(fontContent);
					$(fonts[i]).html(fontContent);
					$(fonts[i]).css({
						// "text-indent":"2em"
					});
				}
			}
		}
	});
}

/**
 * 格式化b标签内容
 */
function formatBContent() {
	$(".TRS_Editor").each(function() {
		var bs = $(this)[0].getElementsByTagName("b");
		for(var i = 0, len = bs.length; i < len; i++) {
			var bContent = $(bs[i]).html();
			if(typeof(bContent) != 'undefined') {
				$(bs[i]).css({
					"line-height":"30px",
					"font-family":"Microsoft YaHei,SimSun,Arial Narrow",
					"color":"#333",
					"margin":"0 0 10px",
					"display":"initial"
				});
				var parentAlignVal = $(bs[i]).parent().attr("align");
				if(typeof(parentAlignVal) == 'undefined' || parentAlignVal == '' ||
					parentAlignVal == 'justify' || parentAlignVal == 'JUSTISF') {
					bContent = trimContent(bContent);
					$(bs[i]).html(bContent);
					$(bs[i]).css({
						// "text-indent":"2em"
					});
				}
			}
		}
	});
}

/**
 * 格式化strong标签内容
 */
function formatStrongContent() {
	$(".TRS_Editor").each(function() {
		var strongs = $(this)[0].getElementsByTagName("strong");
		for(var i = 0, len = strongs.length; i < len; i++) {
			var strongContent = $(strongs[i]).html();
			if(typeof(strongContent) != 'undefined') {
				$(strongs[i]).css({
					"line-height":"30px",
					"font-family":"Microsoft YaHei,SimSun,Arial Narrow",
					"margin":"0 0 10px",
					"color":"#333",
					"display":"initial"
				});
				var parentAlignVal = $(strongs[i]).parent().attr("align");
				if(typeof(parentAlignVal) == 'undefined' || parentAlignVal == '' ||
					parentAlignVal == 'justify' || parentAlignVal == 'JUSTISF') {
					strongContent = trimContent(strongContent);
					$(strongs[i]).html(strongContent);
					$(strongs[i]).css({
						// "text-indent":"2em"
					});
				}
			}
		}
	});
}

/**
 * 格式化table标签
 */
function formatTableContent() {
	$(".TRS_Editor").each(function() {
		var tables = $(this)[0].getElementsByTagName("table");
		for(var i = 0, len = tables.length; i < len; i++) {
			var divContent = $(tables[i]).html();
			$(tables[i]).css({
				"font-size":"16px",
				"color":"#333",
				"font-family":"Microsoft YaHei,SimSun,Arial Narrow",
				"margin":"0 auto"
			});
		}
	});
}

/**
 * 去除字符串首尾空格
 */
function trimContent(content) {
    var formatContent = content;
	//去掉全角半角空格
	formatContent = formatContent.replace(/^[\s　]+|[\s　]+$/g, "");
	//替换段落开头的&nbsp;
	var nbspIndex = formatContent.indexOf("&nbsp;");
	while(nbspIndex == 0) {
		formatContent = formatContent.replace("&nbsp;", "");
		formatContent = formatContent.replace(/^[\s　]+|[\s　]+$/g, "");
		nbspIndex = formatContent.indexOf("&nbsp;");
	}
	//去掉全角半角空格
	formatContent = formatContent.replace(/^[\s　]+|[\s　]+$/g, "");
    return formatContent;
}
},10); 

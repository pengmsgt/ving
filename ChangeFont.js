$(function() {
	ChangeFont();
});

function ChangeFont(fontSize) {
	//格式化div标签字体大小
	$(".TRS_Editor").each(function() {
		var divs = $(this)[0].getElementsByTagName("div");
		for(var i = 0, len = divs.length; i < len; i++) {
			var divContent = $(divs[i]).html();
			$(divs[i]).css({
				"font-size":fontSize+"pt"
			});
		}
	});

	//格式化p标签字体大小
	$(".TRS_Editor").each(function() {
		var paragraphs = $(this)[0].getElementsByTagName("p");
		for(var i = 0, len = paragraphs.length; i < len; i++) {
			var pContent = $(paragraphs[i]).html();
			//alert(pContent);
			if(typeof(pContent) != 'undefined') {
				$(paragraphs[i]).css({
					"font-size":fontSize+"pt"
				});
			}
		}
	});
	
	//格式化span标签字体大小
	$(".TRS_Editor").each(function() {
		var spans = $(this)[0].getElementsByTagName("span");
		for(var i = 0, len = spans.length; i < len; i++) {
			var spanContent = $(spans[i]).html();
			if(typeof(spanContent) != 'undefined') {
				$(spans[i]).css({
					"font-size":fontSize+"pt"
				});
			}
		}
	});

	//格式化font标签字体大小
	$(".TRS_Editor").each(function() {
		var fonts = $(this)[0].getElementsByTagName("font");
		for(var i = 0, len = fonts.length; i < len; i++) {
			var fontContent = $(fonts[i]).html();
			if(typeof(fontContent) != 'undefined') {
				$(fonts[i]).css({
					"font-size":fontSize+"pt"
				});
			}
		}
	});

	//格式化b标签字体大小
	$(".TRS_Editor").each(function() {
		var bs = $(this)[0].getElementsByTagName("b");
		for(var i = 0, len = bs.length; i < len; i++) {
			var bContent = $(bs[i]).html();
			if(typeof(bContent) != 'undefined') {
				$(bs[i]).css({
					"font-size":fontSize+"pt"
				});
			}
		}
	});

	//格式化strong标签字体大小
	$(".TRS_Editor").each(function() {
		var strongs = $(this)[0].getElementsByTagName("strong");
		for(var i = 0, len = strongs.length; i < len; i++) {
			var strongContent = $(strongs[i]).html();
			if(typeof(strongContent) != 'undefined') {
				$(strongs[i]).css({
					"font-size":fontSize+"pt"
				});
			}
		}
	});
}

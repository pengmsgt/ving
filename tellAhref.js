jQuery("a").click(function() {
	if(jQuery(this).attr("href").indexOf("/")==0
	|| jQuery(this).attr("href").indexOf(".")==0
	|| jQuery(this).attr("href").indexOf("index")==0
	|| jQuery(this).attr("href").indexOf("javascript")==0
	|| jQuery(this).attr("href").indexOf("beihai.gov.cn")>=0
	|| jQuery(this).attr("href").indexOf("zwfw.gxzf.gov.cn")>=0
	|| jQuery(this).attr("href").indexOf("#")==0) {
	} else {
		if(jQuery(this).attr("href").indexOf("hepu.gov.cn") < 0) {
		         return confirm("您访问的链接即将离开“合浦县人民政府门户网站”是否继续？");
		}
	}
});
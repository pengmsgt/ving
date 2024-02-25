
/* tab选项js */
/* 第一种形式 第二种形式 更换显示样式 */
function setTab(name, cursel, n) {
	for (i = 1; i <= n; i++) {
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con_" + name + "_" + i);

		menu.className = i == cursel ? "hover" : "";
		con.style.display = i == cursel ? "block" : "none";
	}
}

function setGroupTab(obj,clsGroup)
{
   //标签
   $("." + clsGroup).removeClass("hover");
   $(obj).addClass("hover");
   
   //内容
   $(".con_" + clsGroup).css("display", "none");
   var conID = "con_" + $(obj).attr("id");
   $("#" + conID).css("display", "block");
}
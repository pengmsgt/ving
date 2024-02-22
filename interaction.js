// JavaScript Document
$(function(){
		var SetTab = function (id) {
        $("#" + id + " li").each(function (index) {
            $(this).click(function () {
                $(this).addClass("hover").siblings().removeClass("hover");
                $("#" + id + "-cont" + index).show().siblings().hide();
            })
        });
    }
    SetTab("file");
    SetTab("personnel");
})
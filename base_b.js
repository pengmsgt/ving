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
    SetTab("list");
    SetTab("info");
    SetTab("platform");
    SetTab("file");
    SetTab("file1");
    SetTab("file2");
    SetTab("major");
    SetTab("personnel");
	SetTab("website");
	
	// Slideshow 1



    $('#slideshow_1').cycle({

        fx: 'scrollHorz',		
		easing: 'easeInOutCirc',
		speed:  700, 
		timeout: 5000, 
		pager: '.ss1_wrapper .slideshow_paging', 
        prev: '.ss1_wrapper .slideshow_prev',
        next: '.ss1_wrapper .slideshow_next',
		before: function(currSlideElement, nextSlideElement) {

			var data = $('.data', $(nextSlideElement)).html();

			$('.ss1_wrapper .slideshow_box .data').fadeOut(300, function(){

				$('.ss1_wrapper .slideshow_box .data').remove();

				$('<div class="data">'+data+'</div>').hide().appendTo('.ss1_wrapper .slideshow_box').fadeIn(600);
			});
		}
    });

	$('.ss1_wrapper').mouseenter(function(){
		$('#slideshow_1').cycle('pause');
    }).mouseleave(function(){
		$('#slideshow_1').cycle('resume');
    });

	var mySwiper = new Swiper('.fourth-box .swiper-container',{
		loop: true,
		autoplay : 3000,
		speed:2000,
		spaceBetween:10,
		slidesPerView: 4,
		slidesPerViewFit : false,
		mousewheelControl : false,
		autoplayDisableOnInteraction : false,
		loopedSlides :8
		
	})
	
});
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
}
$(window).scroll(function(){		
	if($(window).scrollTop()>0){
		$(".header").addClass("fixed");
	}
	else{
		$(".header").removeClass("fixed");
	}
});
function backgroundImage() {
    var databackground = $('[data-background]');
    databackground.each(function() {
        if ($(this).attr('data-background')) {
            var image_path = $(this).attr('data-background');
            $(this).css({
                'background': 'url(' + image_path + ')'
            });
        }
    });
}
$(".ps-post--detail .ps-post__header").css("background","url("+$(".ps-post--detail .ps-post__header img").attr("src")+")");
$(".ps-slider--home .ps-banner").each(function(){
	$(this).css("background","url("+$(this).find("img").attr("src")+")");
});
function menuBtnToggle() {
    var toggleBtn = $('.menu-toggle'),
        menu = $('.menu');
    toggleBtn.on('click', function(e) {
        e.preventDefault();
        var self = $(this);
        if (!$(this).hasClass('active')) {
            self.addClass('active');
            menu.slideDown(350);
        } else {
            self.removeClass('active');
            menu.slideUp(350,function(){menu.removeAttr("style");});			
        }
    });
}

function subMenuToggle() {
    $('body').on('click', '.menu--mobile .menu-item-has-children', function(event) {
        //event.preventDefault();
        var current = $(this);
        current.children('.sub-menu').slideToggle(350);
        current.siblings().find('.sub-menu').slideUp(350);
    });
}

function resizeHeader() {
    var header = $('.header'),
        checkPoint = 1200,
        windowWidth = $(window).innerWidth();
    // mobile
    if (checkPoint > windowWidth) {
        $('.menu').find('.sub-menu').hide();
        header.find('.menu').addClass('menu--mobile');
    } else {
        $('.menu').find('.sub-menu').show();
        header.find('.menu').removeClass('menu--mobile active');
        $('.menu-toggle').removeClass('active');
    }
}

function owlCarousel() {
	var element = $('.owl-slider')
    if (element.length > 0) {
        element.each(function() {
            var el = $(this),
                dataAuto = el.data('owl-auto'),
                dataLoop = el.data('owl-loop'),
                dataSpeed = el.data('owl-speed'),
                dataGap = el.data('owl-gap'),
                dataNav = el.data('owl-nav'),
                dataDots = el.data('owl-dots'),
                dataAnimateIn = (el.data('owl-animate-in')) ? el.data('owl-animate-in') : '',
                dataAnimateOut = (el.data('owl-animate-out')) ? el.data('owl-animate-out') : '',
                dataDefaultItem = el.data('owl-item'),
                dataItemXS = el.data('owl-item-xs'),
                dataItemSM = el.data('owl-item-sm'),
                dataItemMD = el.data('owl-item-md'),
                dataItemLG = el.data('owl-item-lg'),
                dataNavLeft = (el.data('owl-nav-left')) ? el.data('owl-nav-left') : "<i class='fa fa-angle-left'></i>",
                dataNavRight = (el.data('owl-nav-right')) ? el.data('owl-nav-right') : "<i class='fa fa-angle-right'></i>",
                duration = el.data('owl-duration'),
                videos =  el.data('owl-video'),
                datamouseDrag = (el.data('owl-mousedrag') == 'on') ? true : false;

            if (el.children('div').length > 1) {
                el.owlCarousel({
                    animateIn: dataAnimateIn,
                    animateOut: dataAnimateOut,
                    margin: dataGap,
                    autoplay: dataAuto,
                    autoplayTimeout: dataSpeed,
                    autoplayHoverPause: true,
                    loop: dataLoop,
                    nav: dataNav,
                    mouseDrag: datamouseDrag,
                    touchDrag: true,
                    autoplaySpeed: duration,
                    navSpeed: duration,
                    dotsSpeed: duration,
                    dragEndSpeed: duration,
                    navText: [dataNavLeft, dataNavRight],
                    dots: dataDots,
                    items: dataDefaultItem,
                    autoplayHoverPause:true,
                    autoHeight:true,
					video: videos,	
                    responsive: {
                        0: {
                            items: dataItemXS
                        },
                        480: {
                            items: dataItemSM
                        },
                        768: {
                            items: dataItemMD
                        },
                        992: {
                            items: dataItemLG
                        },
                        1200: {
                            items: dataDefaultItem
                        }
                    }
                });
            };
        });
    };
    
};

function masonry() {
    var masonryTrigger = $('.ps-masonry');
    if (masonryTrigger.length > 0) {
        if (masonryTrigger.hasClass('filter')) {
            masonryTrigger.imagesLoaded(function() {
                masonryTrigger.isotope({
                    columnWidth: '.grid-sizer',
                    itemSelector: '.grid-item'
                });
            });
            var filters = $('#masonry-filter');
            filters.on('change', function(e) {
                var currentFilter = $(this).val();
                console.log(currentFilter);
                masonryTrigger.isotope({
                    itemSelector: '.grid-item',
                    isotope: {
                        columnWidth: '.grid-sizer'
                    },
                    filter: "."+currentFilter
                });
            })
            // masonryTrigger.isotope({
            //     itemSelector: '.grid-item',
            //     isotope: {
            //         columnWidth: '.grid-sizer'
            //     },
            //     filter: currentFilter
            // });
            // filters.on('click', function() {
            //     var selector = $(this).attr('data-filter');
            //     // filters.find('a').removeClass('current');
            //     $(this).parent('li').addClass('current');
            //     $(this).parent('li').siblings('li').removeClass('current');
            //     masonryTrigger.isotope({
            //         itemSelector: '.grid-item',
            //         isotope: {
            //             columnWidth: '.grid-sizer'
            //         },
            //         filter: selector
            //     });
            //     return false;
            // });
        }
        else {
            return false
        }
    }
}

function search() {
    var searchOpen = $('.ps-search-btn'),
        searchClose = $('.ps-search__close'),
        searchbox = $('.ps-search');
    searchOpen.on('click', function(e) {
        e.preventDefault();
        searchbox.addClass('open');
    });
    searchClose.on('click', function(e) {
        e.preventDefault();
        searchbox.removeClass('open');
    });
}

$(function() {
    backgroundImage();
    menuBtnToggle();
    subMenuToggle();
    owlCarousel();
    //masonry();
    search();
});

$(window).on('load resize', function() {
    resizeHeader();
	$(".img-left-body .vc_single_image-wrapper").css("height",$(".img-left-body .vc_single_image-wrapper img").height()+"px");
	/*$(".ps-main").css("min-height",screen.height - $(".ps-footer").height() - 464+"px");*/
	if(screen.width < 992){
		$(".ps-banner.item-video").css("height",$(".ps-banner img").height()+"px");
	}
});

$(window).on('load', function() {

});
$(".wpProQuiz_questionList .wpProQuiz_questionListItem label").click(function(){
	if($(this).find("input.wpProQuiz_questionInput").is(":checked")==true){
		$(".wpProQuiz_questionList .wpProQuiz_questionListItem label").removeClass("checked");
		$(this).addClass("checked");
	}else{
		$(this).removeClass("checked");
	}
});
$(".page-id-31 .ps-post--detail").appendTo(".page-id-31 .ps-main");
// AJAX LOAD MORE
$( document ).ajaxComplete(function() {
    $('.ps-post--inside dark').matchHeight();
});

(function ($) {

    function alm_adv_filter(){
        
		var obj= {}, 
            count = 0;
        
        var menu = $(this),
            datacat = menu.data('category'),
			value = '',
			count = 0;
        
        var select = $(this);
        value += select.val();
        
        //obj[parameter] = value; // add value(s) to obj
        obj['category'] = value; 
        
		console.log(obj);
		
		var data = obj;
		$.fn.almFilter('fade', '300', data); // Send data to Ajax Load More */

	}
	
    $(".alm-filter-nav").on("change", alm_adv_filter);

    
    
       var alm_is_animating = false; // Animating flag
   $('.alm-filter-nav-click li').eq(0).addClass('active'); // Set initial active state
   
   // Btn Click Event
   $('.alm-filter-nav-click li a').on('click', function(e){    
      e.preventDefault();  
      var el = $(this); // Our selected element     
      
      if(!el.hasClass('active') && !alm_is_animating){ // Check for active and !alm_is_animating  
         alm_is_animating = true;   
         el.parent().addClass('active').siblings('li').removeClass('active'); // Add active state
         
         var data = el.data(), // Get data values from selected menu item
             transition = 'fade', // 'slide' | 'fade' | null
             speed = '300'; //in milliseconds
             
         $.fn.almFilter(transition, speed, data); // Run the filter     
      }      
   });
   
   $.fn.almFilterComplete = function(){      
      alm_is_animating = false; // clear animating flag
   };

})(jQuery);

function hash_scroll() {
        $('a[href*=#_]').each(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                && location.hostname == this.hostname
                && this.hash.replace(/#/,'') ) {
                var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
                var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
                var headerTopHeightt = $(".header").outerHeight();
                if ($target) {
                    var targetOffset = $target.offset().top-headerTopHeightt+45;

                    //JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV
                    $(this).click(function() {
                        $('html, body').animate({scrollTop: targetOffset}, 800);
                        return false;
                        
                    });
                }
            }
        });
    }

jQuery(document).ready(function () {
	jQuery(".aboutpage").click(function () {
		var headerTopHeight = $(".header").outerHeight();
		jQuery('html,body').animate({scrollTop: eval($('#' + $(this).attr('target')).offset().top-headerTopHeight-25)},1000);
	});
	
	var myhash = window.location.hash.substr(1);
	if(myhash) {
	    var $targetAnchor = $('#' + myhash +'');
        var headerTopHeightt = $(".header").outerHeight();
	    var targetOffset = $targetAnchor.offset().top-headerTopHeightt-25;
	    $('html, body').animate({scrollTop: targetOffset}, 1000);
	}
	hash_scroll();
    
    
    //carousel stop when video play
    //$('.embed-responsive iframe').on('play', function() {
    /*$('iframe').on('click', function(){
        //owl.trigger('owl.stop');
        //$('.owl-carousel').trigger('stop.owl.autoplay');
        alert('clicked');
    });*/

});

$(document).ready(function(){
    var n = $(".wpProQuiz_listItem").eq(3).children("input").eq(2);
    n.click(function(){
        $(".ps-post--detail").hide();
    })
    
})
$(function() {
   $.fn.almEmpty = function(alm){
      var el = $(alm.content),
         msg = 'Sorry, nothing found in this query';
      el.append('<p>'+ msg +'</p>'); // Append to ALM		
      //console.log("Nothing found in this Ajax Load More query :(");
   };
    
    $.fn.almComplete = function(alm) {
        
        $('.page-template-events .flex-item').matchHeight();
    };
});

    $(function () {
        var sliderSpead = 6000;
        var sliderDesktop = false;
        if(isMyMobie()){
            sliderDesktop = true;
        }

        var myvar = 1;
        var setb;
        var flagslider = false;
        if(!isMyMobie()){
            flagslider = true;
            $(".bn-slide .item").each(function(e){
                if($(this).find(".wrap-video").attr("data-video") == 1){
                    $(this).find(".wrap-video .images").hide();
                    var idvideo = $(this).find(".wrap-video .video-js").attr("id");
                    var datasrc = $(this).find(".wrap-video").attr("data-src");
                    var dataimg = $(this).find(".wrap-video").attr("data-img");
                    if(e==0){
                        jwplayer(idvideo).setup({
                            file: datasrc,
                            image: dataimg,
                            stretching: "exactfit",
                            height: "100%",
                            width: "100%",
                            autostart: true,
                            mute: true
                        });

                        jwplayer(idvideo).onComplete(function(){
                            sliderHome.slick('slickGoTo', 1);
                        });

                    }else{
                        jwplayer(idvideo).setup({
                            file: datasrc,
                            image: dataimg,
                            stretching: "exactfit",
                            height: "100%",
                            width: "100%",
                        });

                    }

                }else{
                    $(this).find(".video-js").remove();
                    if(e==0){
                        setb = setTimeout(function(){
                            sliderHome.slick('slickGoTo', 1);
                        }, sliderSpead);
                    }
                }
            });
        }
        var sliderHome = $('.bn-slide').slick({
            dots: true,
            arrows: true,
            infinite: false,
            auto: true,
            autoplay: sliderDesktop,
            autoplaySpeed: sliderSpead,
            adaptiveHeight: true
        });

        sliderHome.on('beforeChange', function(event, slick, currentSlide, nextSlide){

            if(!isMyMobie()){
                if(flagslider && $(this).find('.slick-slide[data-slick-index="'+(currentSlide)+'"] .wrap-video').attr("data-video") == 1){
                    var idvideoc = $(this).find('.slick-slide[data-slick-index="'+(currentSlide)+'"] .jwplayer').attr("id");
                    jwplayer(idvideoc).pause(true);

                }
            }
        });
        sliderHome.on('afterChange', function(event, slick, currentSlide, nextSlide){
            clearTimeout(setb);
            if(!isMyMobie()){
                if(flagslider){
                    var countTotal = sliderHome.slick("getSlick").slideCount;
                    var typeb = $(this).find('.slick-slide[data-slick-index="'+(currentSlide)+'"] .wrap-video').attr("data-video");
                    var idvideo = $(this).find('.slick-slide[data-slick-index="'+(currentSlide)+'"] .jwplayer').attr("id");
                    var datasrc = $(this).find('.slick-slide[data-slick-index="'+(currentSlide)+'"] .wrap-video').attr("data-src");
                    var dataimg = $(this).find('.slick-slide[data-slick-index="'+(currentSlide)+'"] .wrap-video').attr("data-img");
                    if(typeb == 1){
                        jwplayer(idvideo).load([{
                            image: dataimg,
                            file:datasrc,
                            autostart: true
                        }]);
                        jwplayer(idvideo).play(true);
                        jwplayer(idvideo).onComplete(function(){
                            var numnext  = 0;
                            if(currentSlide < (countTotal -1)){
                                numnext = currentSlide + 1;
                            }
                            myvar = numnext;
                            sliderHome.slick('slickGoTo', myvar);
                        });
                    }else{

                        var numnext  = 0;
                        if(currentSlide < (countTotal -1)){
                            numnext = currentSlide + 1;
                        }
                        myvar = numnext;
                        clearTimeout(setb);
                        setb = setTimeout(function(){
                            sliderHome.slick('slickGoTo', myvar);
                        }, sliderSpead);

                    }
                }
            }

        });

    });

function isMyMobie(){
    var isMobile = false;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
        return isMobile;
}

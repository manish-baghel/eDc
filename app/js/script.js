 /* Toggle of navbar clicking other than on it */
$(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
});

//Toggle tranparent navbar when the user scrolls the page
$(window).scroll(function() {
        // let y = $(this).scrollTop();
        // console.log(y);
        // y = -(y/4);
        // let z = (y*2)+100;
        // $('.banner-div').css("background-position-y",y);
        // if($(window).width()>480){
        //     $('.parallax').css("background-position-y",z);
        // }
        if($(this).scrollTop() > 300)  /*height in pixels when the navbar becomes non opaque*/ 
        {
            $('.navbar-default').addClass('opaque');
        } else {
            $('.navbar-default').removeClass('opaque');
        }
});

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});

//script for banner slider
$(document).ready(function() {
  $(document).on('init.slides', function() {
    $('.loading-container').fadeOut(function() {
      $(this).remove();
    });
  });

  $('#slides').superslides({
    slide_easing: 'ease-in-out',
    slide_speed: 800,
    pagination: false,
    play:4000,
    hashchange: false,
    scrollable: true
  });

  //program carousel
$('.carousel').carousel({
  interval: 5000
})

  document.ontouchmove = function(e) {
    e.preventDefault();
  };
  $('#slides').hammer().on('swipeleft', function() {
    $(this).superslides('animate', 'next');
  });

  $('#slides').hammer().on('swiperight', function() {
    $(this).superslides('animate', 'prev');
  });
  $('#slides').hammer().on('swipeup', function() {
    $('html,body').animate({
            scrollTop: $('#about').offset().top
    },500);
  });
  $('#slides').hammer().on('swipedown', function() {
    $('html,body').animate({
            scrollTop: $('#slides').offset().top
    },500);
  });
});

//typed


// $(document).ready(function(){
// 	var clickEvent = false;
// 	$('#myCarousel').carousel({
// 		interval:   4000	
// 	}).on('click', '.list-group li', function() {
// 			clickEvent = true;
// 			$('.list-group li').removeClass('active');
// 			$(this).addClass('active');		
// 	}).on('slid.bs.carousel', function(e) {
// 		if(!clickEvent) {
// 			var count = $('.list-group').children().length -1;
// 			var current = $('.list-group li.active');
// 			current.removeClass('active').next().addClass('active');
// 			var id = parseInt(current.data('slide-to'));
// 			if(count == id) {
// 				$('.list-group li').first().addClass('active');	
// 			}
// 		}
// 		clickEvent = false;
// 	});
// });
//Carousel optional
if(!/iPhone/i.test(navigator.userAgent)) {
    $('.active > div > video').get(0).play();

    $('#carousel').bind('slide.bs.carousel', function(e) {
      $(e.relatedTarget).find('video').get(0).play();
    });

    $('#carousel').bind('slid.bs.carousel', function(e) {
      $('video').not('.active > div > video').each(function() {
        $(this).get(0).pause();
      });
    });
}
// $(window).ready(function() {
//     var boxheight = $('#myCarousel .carousel-inner').innerHeight();
//     console.log(itemlength);
//     var itemlength = $('#myCarousel .item').length;
//     console.log(itemlength);
//     var triggerheight = Math.round(boxheight/itemlength+1);
//     console.log(itemlength);
// 	$('#myCarousel .list-group-item').outerHeight(triggerheight);
// });

// $(window).resize(function() {
//     var boxheight = $('#myCarousel .carousel-inner').innerHeight();
// //    console.log(itemlength);
//     var itemlength = $('#myCarousel .item').length;
// //    console.log(itemlength);
//     var triggerheight = Math.round(boxheight/itemlength+1);
// //    console.log(itemlength);
// 	$('#myCarousel .list-group-item').outerHeight(triggerheight);
// });



(function appinstance(){
    var bnrImg,i=1,num1,num2,num3;
    document.addEventListener('DOMContentLoaded',function(){
        loadElements();
        addEventListener();
//        bannerSlider();
        smoothScrollAnchors();
    });
    
//    Custom Functions
    
    //Smooth Scroll Anchors
    function smoothScrollAnchors() {
        $('a[href*="#"]:not([href="#"]):not(a[href="#carousel"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    console.log(target);
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    },600);
                    return false;
                }
            }
        });
    }
    
    function addEventListener(){
        
    }
    
    function loadElements(){
        num1 = document.getElementById('num1');
        num2 = document.getElementById('num2');
        num3 = document.getElementById('num3');
    }
})();
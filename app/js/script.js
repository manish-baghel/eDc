 /* Toggle of navbar clicking other than on it */
$(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
});

// Toggle tranparent navbar when the user scrolls the page
$(window).scroll(function() {
        let y = $(this).scrollTop();
        y = -(y/4);
        let z = (y*2)+600;
        $('.banner-div').css("background-position-y",y);
        if($(window).width()>480){
            $('.parallax').css("background-position-y",z);
        }
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

$(document).ready(function(){
	var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});
$(window).ready(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    console.log(itemlength);
    var itemlength = $('#myCarousel .item').length;
    console.log(itemlength);
    var triggerheight = Math.round(boxheight/itemlength+1);
    console.log(itemlength);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});

$(window).resize(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
//    console.log(itemlength);
    var itemlength = $('#myCarousel .item').length;
//    console.log(itemlength);
    var triggerheight = Math.round(boxheight/itemlength+1);
//    console.log(itemlength);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});



(function appinstance(){
    var bnrImg,i=1,num1,num2,num3;
    document.addEventListener('DOMContentLoaded',function(){
        loadElements();
        addEventListener();
//        bannerSlider();
        smoothScrollAnchors();
    });
    
//    Custom Functions
    
    // Smooth Scroll Anchors
    function smoothScrollAnchors() {
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
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
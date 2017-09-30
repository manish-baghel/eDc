 /* OPAQUE NAVBAR SCRIPT */

// Toggle tranparent navbar when the user scrolls the page
$(window).scroll(function() {
        if($(this).scrollTop() > 500)  /*height in pixels when the navbar becomes non opaque*/ 
        {
            $('.navbar-default').addClass('opaque');
        } else {
            $('.navbar-default').removeClass('opaque');
        }
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
    function bannerSlider(){
        i=(i+1)%4;
        bnrImg.style.backgroundImage = "url(../images/carousel-"+i+".jpg)";
        console.log(i);
        setTimeout(bannerSlider,4000);
    }
    
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
        bnrImg = document.getElementById('banner-image');
        num1 = document.getElementById('num1');
        num2 = document.getElementById('num2');
        num3 = document.getElementById('num3');
    }
})();
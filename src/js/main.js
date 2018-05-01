$(window).scroll(function() {
    
  'use strict';

    if ($(window).scrollTop() > 220 ) {
        $('#nav').css ({
        'background': '#fff',
        'box-shadow': '0 4px 2px -2px #f7f7f7',
    });
    $('.navbar-nav>li>a').css ({
      'color': '#333',
  });
    } else {
      $('#nav').css ({
        'background': 'transparent',
        'box-shadow': 'none',
      }),
      $('.navbar-nav>li>a').css ({
        'color': '#fff',
    });
    }
    
});
/** ADD SMOOTH SCROLLING**/
$(document).ready(function() {
    
  'use strict';
  

$('.navbar-nav>li>a')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1'); 
          $target.focus(); 
        };
      });
    }
  }
});

  
  
});

// Carrousel 
$('.screenshots').owlCarousel({
  slideBy:2,
margin: 15,
nav: true,
loop: true,
autoplay:true,
autoplayTimeout:2000,       
responsive: {
  0: {
    items: 1
  },
  480: {
    items: 2
  },         
  768: {
    items: 4
  }
}
})
/// add animation

$(document).ready(function() {
  'use stript';
  new WOW().init();
  
});

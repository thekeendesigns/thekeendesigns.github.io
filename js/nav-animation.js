$(document).ready(function(){
    
var scrollTop = 0;

  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
      $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('.global-nav').addClass('-collapse');
    } else if (scrollTop < 100) {
      $('.global-nav').removeClass('-collapse');
    }    
  });  
});

// work Navigation
  $('#workNavigation li').on('click', function(){
    $('#workNavigation li').removeClass('workSelected');
    $(this).addClass('workSelected');
});

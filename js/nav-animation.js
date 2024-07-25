
// work Navigation
  $('#workNavigation li').on('click', function(){
    $('#workNavigation li').removeClass('workSelected');
    $(this).addClass('workSelected');
});

var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBarContainer").style.top = "2%";
    document.getElementById("navBarContainer").style.transition = "all 0.3s ease";
  } else {
    document.getElementById("navBarContainer").style.top = "-70px";
    document.getElementById("navBarContainer").style.transition = "all 0.3s ease";
  }
  prevScrollpos = currentScrollPos;
}


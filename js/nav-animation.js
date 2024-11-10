
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
    document.getElementById("navBarMobContainer").style.top = "1%";
    document.getElementById("navBarMobContainer").style.transition = "all 0.3s ease";
  } else {
    document.getElementById("navBarContainer").style.top = "-70px";
    document.getElementById("navBarContainer").style.transition = "all 0.3s ease";
    document.getElementById("navBarMobContainer").style.top = "-70px";
    document.getElementById("navBarMobContainer").style.transition = "all 0.3s ease";
  }
  prevScrollpos = currentScrollPos;
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("openMenu");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeButton")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
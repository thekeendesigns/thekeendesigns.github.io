$(document).ready(function() {
    $(window).scroll( function(){ // When user scrolls, execute this JQuery function
        $('.fadein').each( function(i){
            
                var top_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height() * 1.4; // How far the scroll is from the text

        if ( bottom_of_window > top_of_element) {
            $(this).animate({'opacity':'1'},500); // Controls opacity
            $(this).css({transform:'translateY(-100px)'},2000); // Controls y position
            }
        }); 
    });
});

const cursor = document.querySelector('.newCursor');

let size;
document.body.addEventListener("mousemove", (ev)=>{
    let path = ev.composedPath();
    
    if (path.some(x=>x.tagName == "A")) size = 40;
    else size = 20;
    
    cursor.style.left   = (ev.clientX - size/2) + "px";
    cursor.style.top    = (ev.clientY - size/2) + "px";
    cursor.style.width  = size + "px";
    cursor.style.height = size + "px";
});
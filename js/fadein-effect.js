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

let size = 20;
let lastX = 0;
let lastY = 0;

document.body.addEventListener("mousemove", (ev) => {
    const path = ev.composedPath();
    const newSize = path.some(x => x.tagName === "A") ? 40 : 20;
    
    if (size !== newSize) {
        size = newSize;
        cursor.style.transform = `scale(${size/20})`;
    }
    
    // Update cursor position with no delay
    cursor.style.transform = `translate3d(${ev.clientX - 10}px, ${ev.clientY - 10}px, 0) scale(${size/20})`;
    
    // Store current position
    lastX = ev.clientX;
    lastY = ev.clientY;
});
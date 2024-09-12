document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [
        "Can talk 🏀 all day" , 
        "Learning how to play pickleball", 
        "Current show he's watching, Peaky Blinders!",
        "Is scared of deep-diving",
        "Favourite anime is One Piece",
        "Favourite movie is UP!",
        "New programs learned, Vercel and Microsoft Clarity",
        "Crafts cosplay and props",
        "Always available to connect and chat!"
    ];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.getElementById("changeAbout").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 50);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 1000);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
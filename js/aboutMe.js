document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [
        "Can talk 🏀 all day" , 
        "Current show he's watching, Peaky Blinders!",
        "Is scared of deep-diving",
        "Cleans the dishes before eating",
        "Watched 188 animes and counting",
        "Reading JJBA Jojolion",
        "Favourite movie is UP!",
        "Is fascinated about WW1, WW2, and ancient history",
        "Chinese food is his go-to comfort food",
        "Any type of lemon tea > coffee"
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
      let dataAmount = dataText[i].length;
       // check if dataText[i] exists
      if (i < dataAmount) {
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
document.addEventListener('DOMContentLoaded', function(event) {
  var dataText = [
      "Can talk 🏀 all day", 
      "Favourite show this year was Peaky Blinders",
      "Is scared of deep-diving",
      "Cleans the dishes before eating",
      "Watched 188 animes and counting",
      "Collector of coke memorabilia",
      "Reading JJBA Jojolion",
      "Favourite movie is UP!",
      "Is fascinated about WW1, WW2, and ancient history",
      "Chinese is his comfort food",
      "Lemon tea > coffee"
  ];

  function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
          document.getElementById("changeAbout").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
          setTimeout(function() {
              typeWriter(text, i + 1, fnCallback);
          }, 40); // Slower typing speed
      } else if (typeof fnCallback === 'function') {
          setTimeout(fnCallback, 1000); // Wait before next text
      }
  }

  function StartTextAnimation(i) {
      if (i < dataText.length) {
          typeWriter(dataText[i], 0, function() {
              StartTextAnimation(i + 1);
          });
      } else {
          setTimeout(function() {
              StartTextAnimation(0); // Restart animation
          }, 1000);
      }
  }

  StartTextAnimation(0);
});
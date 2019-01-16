
// For research section
function hideResearch() { 
    var x = document.getElementById("toggle-hide");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

var button = document.getElementById("toggle-research");

    button.addEventListener('click', function() {
        if (button.getAttribute("data-text-swap") == button.innerHTML) {
            button.innerHTML = button.getAttribute("data-text-original");
        } else {
            button.setAttribute("data-text-original", button.innerHTML);
            button.innerHTML = button.getAttribute("data-text-swap");
        }
    }, false);

// For user flow section
function hideUser() { 
    var x = document.getElementById("toggle-hide-user");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var button1 = document.getElementById("toggle-user");

  button1.addEventListener('click', function() {
    if (button1.getAttribute("data-text-swap") == button1.innerHTML) {
      button1.innerHTML = button1.getAttribute("data-text-original");
    } else {
      button1.setAttribute("data-text-original", button1.innerHTML);
      button1.innerHTML = button1.getAttribute("data-text-swap");
    }
}, false);




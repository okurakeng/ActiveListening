// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

function checkAnswers() {
  let eyes = document.getElementById("eyes");
  let mouth = document.getElementById("mouth");
  let mind = document.getElementById("mind");
  let ears = document.getElementById("ears");

  let correct = 0;

  if (matchesAny(eyes.value.toLowerCase(), ["eye","eyes"])) {
    eyes.setAttribute("style","background-color: #0AF739; ");
    eyes.disabled = true;
    correct++;
  } else {
    eyes.setAttribute("style","background-color: #FF8A8A; ");
  }

  if (matchesAny(mouth.value.toLowerCase(), ["mouth","mouths"])) {
    mouth.setAttribute("style","background-color: #0AF739; ");
    mouth.disabled = true;
    correct++;
  } else {
    mouth.setAttribute("style","background-color: #FF8A8A; ");
  }

  if (matchesAny(mind.value.toLowerCase(), ["mind","brain","head","thought"])) {
    mind.setAttribute("style","background-color: #0AF739; ");
    mind.disabled = true;
    correct++;
  } else {
    mind.setAttribute("style","background-color: #FF8A8A; ");
  }

  if (matchesAny(ears.value.toLowerCase(), ["ear","ears"])) {
    ears.setAttribute("style","background-color: #0AF739; ");
    ears.disabled = true;
    correct++;
  } else {
    ears.setAttribute("style","background-color: #FF8A8A; ");
  }

  if (correct == 4) {
    document.getElementById("peoplecheckAnswers").disabled = true;
    document.getElementById("Congrats").innerText = "Horray! All correct!"
    
  }

}

function matchesAny(str, arr) {
  answer = false;
  arr.forEach((item) => { if (item == str) answer = true; });
  return answer;
}

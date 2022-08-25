var dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "red";

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 8);

  if (left > 0) {
    dodger.style.left = `${left - 6}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 8);

  if (left < 360) {
    dodger.style.left = `${left + 6}px`;
  }
}

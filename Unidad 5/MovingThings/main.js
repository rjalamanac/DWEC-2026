const btn = document.getElementById("idBtn");
btn.addEventListener("mouseover", moveIt);

function moveIt(event) {
  let randomY = Math.random() * window.screen.height;
  let randomX = Math.random() * window.screen.width;
  btn.style.position = "absolute";
  btn.style.top = Math.floor(randomY) + "px";
  btn.style.left = Math.floor(randomX) + "px";
}

setInterval(moveIt, 200);

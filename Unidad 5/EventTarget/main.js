for (let index = 0; index < Math.random() * 100; index++) {
  createButton(index);
}

function createButton(id) {
  const btn = document.createElement("button");
  btn.textContent = id;
  btn.jamon = id;
  btn.addEventListener("click", clickMe);
  document.getElementById("idMain").appendChild(btn);
}

function clickMe(event) {
  const intValue = parseInt(document.getElementById("idResult").textContent);
  document.getElementById("idResult").textContent =
    intValue + parseInt(event.target.jamon);
}

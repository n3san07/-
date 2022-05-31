//  hani gath 

function getName() {
  player1 = prompt("player 1 name ");
  player2 = prompt("player 2 name ");

  document.getElementById("play1").innerHTML = player1;
  document.getElementById("play2").innerHTML = player2;
}
getName();

function render() {
  let random1 = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;
  let p = document.getElementById("won");

  document.getElementById("img1").src = ` dice${random1}.png  `;
  document.getElementById("img2").src = ` dice${random2}.png  `;

  if (random1 > random2) {
    p.innerHTML = `${player1} won 👏	`;
  } else if (random2 > random1) {
    p.innerHTML = `${player2} won 👏	 `;
  } else {
    p.innerHTML = `👉 drew 👈	`;
  }
}

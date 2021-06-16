document.querySelector("body").onload = function() {randomDice()};
var diceItems = [];
// var i;
// for (i = 1; i <= (diceItems.length); i++)
// {
//   diceItems.push("images/dice" + i + ".png");
// }
diceItems.push("images/dice1.png");
diceItems.push("images/dice2.png");
diceItems.push("images/dice3.png");
diceItems.push("images/dice4.png");
diceItems.push("images/dice5.png");
diceItems.push("images/dice6.png");
function randomDice() {

// ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
var item1 = diceItems[Math.floor(Math.random() * diceItems.length)];
var item2 = diceItems[Math.floor(Math.random() * diceItems.length)];
document.querySelector(".img1").setAttribute("src", item1);
document.querySelector(".img2").setAttribute("src", item2);

if (item1 > item2)
{
  document.querySelector("h1").innerHTML = "<i class='fa-solid fa-flag-pennant'></i> Player 1 Wins";
}
else if (item2 > item1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins <i class='fa-solid fa-flag-pennant'></i>";
}
else {
  document.querySelector("h1").textContent = "It is a draw";
}
}

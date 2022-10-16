var randomNumber1 = Math.floor(Math.random() * 7) + 1;

function diceImg() {
  switch (randomNumber1) {
  case randomNumber1 = 1:
    document.querySelector(".dice1 img").setAttribute("src", 'images/dice1.png')
    break;
  case randomNumber1 = 2:
     document.querySelector(".dice1 img").setAttribute("src", 'images/dice2.png')
    break;
  case randomNumber1 = 3:
    document.querySelector(".dice1 img").setAttribute("src", 'images/dice3.png')
    break;
  case randomNumber1 = 4:
    document.querySelector(".dice1 img").setAttribute("src", 'images/dice4.png')
    break;
  case randomNumber1 = 5:
    document.querySelector(".dice1 img").setAttribute("src", 'images/dice5.png')
    break;
  case randomNumber1 = 6:
    document.querySelector(".dice1 img").setAttribute("src", 'images/dice6.png')
    default:
    document.querySelector(".dice1 img").setAttribute("src", 'images/dice6.png')
}

}
console.log(randomNumber1);

diceImg();

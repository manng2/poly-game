function init() {
  const cardGames = Array.from(document.getElementsByClassName("card-game"));
  cardGames.forEach((it) => {
    it.addEventListener("click", function () {
      flipCard(this, "assets/images/player-card/player-1/big.png");
    });
  });
}

init();

function flipCard(el, img) {
  const cardGameInner = el.querySelector("#card-game #card-game-inner");
  const cardGameBackImg = el.querySelector("#card-game-back img");

  if (cardGameInner.style.transform !== "rotateY(180deg)") {
    cardGameInner.style.transform = "rotateY(180deg)";
    cardGameBackImg.src = img;
  }
}

function flopCard(el) {
  const cardGameInner = el.querySelector("#card-game #card-game-inner");
  const cardGameBackImg = el.querySelector("#card-game-back img");

  cardGameInner.style.transform = "";
  cardGameBackImg.src = "";
}

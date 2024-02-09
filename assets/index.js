function init() {
  const cardGames = Array.from(document.getElementsByClassName("card-game"));
  cardGames.forEach((it) => {
    it.addEventListener("click", function () {
      flipCard(this, "assets/images/player-card/player-1/big.png");
    });
  });
  listenCloseButtonNotificationDialog();
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

function openWinDialog(img, total) {
  document.getElementById("notification-dialog").classList.remove("hidden");
  document.getElementById("notification-dialog").classList.add("flex");
  document.getElementById("notification-dialog-title").innerText = 'Congratulations!';
  document.getElementById("notification-dialog-player-card").src = img;
  document.getElementById("notification-dialog-total").innerText = total;
  document.body.style.overflow = "hidden";
}

function openLoseDialog(img, total) {
  document.getElementById("notification-dialog").classList.remove("hidden");
  document.getElementById("notification-dialog").classList.add("flex");
  document.getElementById("notification-dialog-title").innerText = 'Better luck next time';
  document.getElementById("notification-dialog-player-card").src = img;
  document.getElementById("notification-dialog-total").innerText = total;
  document.body.style.overflow = "hidden";
}

function closeNotificationDialog() {
  document.getElementById("notification-dialog").classList.remove("flex");
  document.getElementById("notification-dialog").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function listenCloseButtonNotificationDialog() {
  document.getElementById('notification-dialog-close-button').addEventListener('click', function() {
    closeNotificationDialog();
  })
}

function showWinNFT(cardUrl) {
  const winNFTEl = document.getElementById('win-nft');
  const winNFTOverlayEl = document.getElementById('win-nft-overlay');
  winNFTEl.style.display = 'block';
  winNFTEl.style.opacity = .5;
  winNFTOverlayEl.style.display = 'block';
  document.body.style.overflow = "hidden";

  const timeout = setInterval(() => {
    if (winNFTEl.style.opacity < 1) {
      winNFTEl.style.opacity = parseFloat(winNFTEl.style.opacity) + 0.01;
    } else {
      clearInterval(timeout);
    }
  }, 100)
  winNFTEl.play();

  setTimeout(() => {
    const winNFTImg = document.querySelector('#win-nft-overlay img');
    winNFTImg.src = cardUrl || "assets/images/player-card/player-1/big.png";
    winNFTImg.style.opacity = 1;
  }, 5000);
}

function closeWinNFT() {
  const winNFTEl = document.getElementById('win-nft');
  document.body.style.overflow = "auto";
  winNFTEl.style.display = 'none';
  winNFTEl.pause();
}

function openWithDrawDialog() {
  document.getElementById("withdraw-dialog").classList.remove("hidden");
  document.getElementById("withdraw-dialog").classList.add("block");
  document.body.style.overflow = "hidden";
}

function closeWithdrawDialog() {
  document.getElementById("withdraw-dialog").classList.remove("block");
  document.getElementById("withdraw-dialog").classList.add("hidden");
  document.body.style.overflow = "auto";
}
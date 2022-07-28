'use strict';
//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const modal = document.querySelector('.modal');
const blurr = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const winnerModel = document.getElementById('winner');
//swith player function
const swtichPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0EL.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1 Generate a random number
    const dice = Number(Math.trunc(Math.random() * 6) + 1);
    //2 display dice #
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3 check for rolled 1 ; If ture, switch to next player.
    if (dice != 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // switch to the next player
      swtichPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores);
    //write score on active player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      winnerModel.textContent = activePlayer + 1;
      modal.classList.remove('hidden');
      blurr.classList.remove('hidden');
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      swtichPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

const closeModal = function () {
  modal.classList.add('hidden');
  blurr.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
blurr.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

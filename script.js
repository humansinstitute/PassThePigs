"use strict";

// Selecting Elements

// These two are functionally equivalent, technically getElementById is quicker, but not really required.
// Adding the El is to differentiate these are hte elements as variables not the score variables tehmselves.
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");
const scoreMessageEl = document.querySelector(".scoreMessage");
const dice1El = document.querySelector(".dice1");
const dice2El = document.querySelector(".dice2");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// declare global variables for first load

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

let scores, currentScore, activePlayer, playing, makingBacon, pigMessage;

const setupGame = function () {
  scores = [0, 0]; //  Scores will be held here
  currentScore = 0;
  activePlayer = 0; // Sets active player to player 1
  playing = true;
  makingBacon = false;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  dice1El.classList.add("hidden");
  dice2El.classList.add("hidden");
  scoreMessageEl.textContent = "";

  currentScore = 0;

  playing = true;
  if (player0El.classList.contains("player--winner"))
    player0El.classList.remove("player--winner"); //could just run this line and if its not there then will just ignore if not there
  if (player1El.classList.contains("player--winner"))
    player1El.classList.remove("player--winner");
  activePlayer = 1; // Sets active player to 2 then calls switch player to setup properly :)
  switchPlayer();
};

const setScore = function (currentScore) {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

const hideDice = function () {
  dice1El.classList.add("hidden");
  dice2El.classList.add("hidden");
  scoreMessageEl.textContent = "";
};

const switchPlayer = function () {
  // Swap the player active class! <section class="player player--0 player--active">
  if (activePlayer === 0) {
    player0El.classList.remove("player--active");
    player1El.classList.add("player--active");
    //   ALTERNATIVE
    //   player0El.classList.toggle('player-active');
    //   player1El.classLIst.toggle('player-active');
  } else {
    player1El.classList.remove("player--active");
    player0El.classList.add("player--active");
  }
  activePlayer = activePlayer === 0 ? 1 : 0; // if active player is 0 then set to 1 or set to 0 if its one
};

const pigState = function (pigSc) {
  if (pigSc > 0 && pigSc <= 34900) {
    return 1;
  } else if (pigSc > 34900 && pigSc <= 65100) {
    return 2;
  } else if (pigSc > 65100 && pigSc <= 87500) {
    return 3;
  } else if (pigSc > 87500 && pigSc <= 96300) {
    return 4;
  } else if (pigSc > 96300 && pigSc <= 99300) {
    return 5;
  } else if (pigSc > 99300 && pigSc <= 100000) {
    return 6;
  }
};

const pigScore = function (pig1, pig2) {
  console.log(pig1, pig2);
  if (pig1 === 1 && pig2 === 1) {
    pigMessage = "Sider";
    return 1;
  } else if (pig1 === 1 && pig2 === 2) {
    pigMessage = "Pig Out";
    return 0;
  } else if (pig1 === 1 && pig2 === 3) {
    pigMessage = "Razorback";
    return 5;
  } else if (pig1 === 1 && pig2 === 4) {
    pigMessage = "Trotter";
    return 5;
  } else if (pig1 === 1 && pig2 === 5) {
    pigMessage = "Snouter";
    return 10;
  } else if (pig1 === 1 && pig2 === 6) {
    pigMessage = "Leaning Jowler";
    return 15;
  } else if (pig1 === 2 && pig2 === 1) {
    pigMessage = "Pig Out";
    return 0;
  } else if (pig1 === 2 && pig2 === 2) {
    pigMessage = "Sider";
    return 1;
  } else if (pig1 === 2 && pig2 === 3) {
    pigMessage = "Razorback";
    return 5;
  } else if (pig1 === 2 && pig2 === 4) {
    pigMessage = "Trotter";
    return 5;
  } else if (pig1 === 2 && pig2 === 5) {
    pigMessage = "Snouter";
    return 10;
  } else if (pig1 === 2 && pig2 === 6) {
    pigMessage = "Leaning Jowler";
    return 15;
  } else if (pig1 === 3 && pig2 === 1) {
    pigMessage = "Razorback";
    return 5;
  } else if (pig1 === 3 && pig2 === 2) {
    pigMessage = "Razorback";
    return 5;
  } else if (pig1 === 3 && pig2 === 3) {
    pigMessage = "Double Razorback";
    return 20;
  } else if (pig1 === 3 && pig2 === 4) {
    pigMessage = "Razorback & Trotter";
    return 10;
  } else if (pig1 === 3 && pig2 === 5) {
    pigMessage = "Razorback & Snouter";
    return 15;
  } else if (pig1 === 3 && pig2 === 6) {
    pigMessage = "Razorback & Jowler";
    return 20;
  } else if (pig1 === 4 && pig2 === 1) {
    pigMessage = "Trotter";
    return 5;
  } else if (pig1 === 4 && pig2 === 2) {
    pigMessage = "Trotter";
    return 5;
  } else if (pig1 === 4 && pig2 === 3) {
    pigMessage = "Trotter & Razorback";
    return 10;
  } else if (pig1 === 4 && pig2 === 4) {
    pigMessage = "Double Trotter";
    return 20;
  } else if (pig1 === 4 && pig2 === 5) {
    pigMessage = "Trotter & Snouter";
    return 15;
  } else if (pig1 === 4 && pig2 === 6) {
    pigMessage = "Trotter & Jowler";
    return 20;
  } else if (pig1 === 5 && pig2 === 1) {
    pigMessage = "Snouter";
    return 10;
  } else if (pig1 === 5 && pig2 === 2) {
    pigMessage = "Snouter";
    return 10;
  } else if (pig1 === 5 && pig2 === 3) {
    pigMessage = "Snouter & Razorback";
    return 15;
  } else if (pig1 === 5 && pig2 === 4) {
    pigMessage = "Snouter & Trotter";
    return 15;
  } else if (pig1 === 5 && pig2 === 5) {
    pigMessage = "Double Snouter";
    return 40;
  } else if (pig1 === 5 && pig2 === 6) {
    pigMessage = "Snouter & Jowler";
    return 25;
  } else if (pig1 === 6 && pig2 === 1) {
    pigMessage = "Leaning Jowler";
    return 15;
  } else if (pig1 === 6 && pig2 === 2) {
    pigMessage = "Leaning Jowler";
    return 15;
  } else if (pig1 === 6 && pig2 === 3) {
    pigMessage = "Jowler & Razorback";
    return 20;
  } else if (pig1 === 6 && pig2 === 4) {
    pigMessage = "Jowler & Trotter";
    return 20;
  } else if (pig1 === 6 && pig2 === 5) {
    pigMessage = "Jowler & Snouter";
    return 25;
  } else if (pig1 === 6 && pig2 === 6) {
    pigMessage = "Double Leaning Jowler";
    return 60;
  }
};

// *** *** FUNCTIONALITY  *** ***
setupGame();

//  *** Rolling the dice ***

btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generate a random dice roll
    makingBacon = false;
    const pig1Sc = Math.trunc(Math.random() * 100000) + 1; // I'm truncating here so I can do probabilities to 3 decial places  in order to set the pig state:)
    const pig2Sc = Math.trunc(Math.random() * 100000) + 1; // I'm truncating here so I can do probabilities to 3 decial places  in order to set the pig state:)
    const mbSc = Math.trunc(Math.random() * 1000) + 1; // I'm truncating here so I can do probabilities to 3 decial places  in order to set the pig state:)
    console.log(`Pig1Sc = ${pig1Sc} - Pig2Sc = ${pig2Sc}`);
    //1 = Side no do, 2 = side dot, 3 = razorback, 4 = trotter, 5 = snouter, 6 = leaning jowler
    let pig1, pig2;

    pig1 = pigState(pig1Sc);
    pig2 = pigState(pig2Sc);
    if (mbSc > 998) makingBacon = true;

    //TODO TEMPOARY PIGS with no probabilities
    // pig1 = Math.trunc(Math.random() * 6) + 1;
    // pig2 = Math.trunc(Math.random() * 6) + 1;

    console.log(
      `Pig 1 is a ${pig1} & Pig 2 is a ${pig2} & Making Bacon = ${makingBacon}`
    );
    //   console.log(dice);
    // 2. Display the dice
    dice1El.classList.remove("hidden");
    dice2El.classList.remove("hidden");

    // Need to manipulate the src variables in the image <img src="dice-5.png" alt="Playing dice" class="dice" />
    if (makingBacon === true) {
      dice1El.src = `pig-7.png`;
      dice2El.src = `pig-7.png`;
      scoreMessageEl.textContent = "Making Bacon!";
      scores[activePlayer] = 0;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      switchPlayer();
    } else {
      dice1El.src = `pig-${pig1}.png`;
      dice2El.src = `pig-${pig2}.png`;
      let result = pigScore(pig1, pig2);
      scoreMessageEl.textContent = pigMessage;
      console.log(result);
      if (result != 0) {
        currentScore = currentScore + result;
        console.log(`Current Score ${currentScore}`);
        setScore(currentScore);
      } else {
        currentScore = 0;
        setScore(currentScore);
        switchPlayer();
      }
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //Add current score to active plaers score
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if score is >= 100
    if (scores[activePlayer] >= 100) {
      // console.log(`Player ${activePlayer + 1} WINNS!`);
      // set .player--winner class to active player who has won.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      playing = false;
      dice1El.classList.add("hidden");
      dice2El.classList.add("hidden");
    } else {
      currentScore = 0;
      setScore();
      switchPlayer();
      hideDice();
    }
    //then finish game

    //or swithc players.
  }
});

btnNew.addEventListener("click", setupGame);

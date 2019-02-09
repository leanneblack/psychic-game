
// --create game Variables-- //

let win = 0;
let loss = 0;
let guessCount = 10 ;
let userGuessedLetters =[];
let computer=randomLetterPicker();



// --Computer picks a random Letter from a-z function-- //

function randomLetterPicker(){
  return String.fromCharCode(Math.floor(Math.random() * 25) + 97)
}

// to test if random letter picker works //

console.log(computer);




// computer gets input from player's guess on keyboard press //
//computer has to compare the players keyboard guess against the random number selected in the function //

document.onkeyup = function(event){
  let player = event.key;
  
// if the player guesses correctly they get a win and an alert saying they won! and the game tallys a win and has to reset to choose a new letter so the player can play again //

if (player === computer){
  win ++;
  userGuessedLetters =[];
  guessCount = 10;
  reset();
}

if (player !== computer){
  guessCount--;

}

if (guessCount == 0){
  loss ++;
  userGuessedLetters = [];
  reset();
  
}

// put letter pressed by player into html //
if (userGuessedLetters.indexOf(player)>= 0){ 
} else {
  userGuessedLetters.push(player);
  document.getElementById('userGuessedLetters').innerHTML = userGuessedLetters;

}



// add scores to html //

document.getElementById('win').innerHTML = win;
document.getElementById('loss').innerHTML = loss;
document.getElementById('guessCount').innerHTML = guessCount;

}

// reset function ------ NEED HELP on how to make random letter reselect each time there is a win or guesses run out!!! //

let reset = function(){
  computer =randomLetterPicker();
  guessCount = 10;
  console.log (computer);
}










//constants
var POSSIBLE_WORDS = ["obdurate","verisimilitu","defenestrate","obsequious","dissonant","toady","idempotent"];
var MAX_GUESSES = 6;                //number of total guesses per game

//globla variables
var word = "?";                     //random word user is trying to guess
var guesses = "";                   //letters the player has guessed
var guessCount = MAX_GUESSES;       //number of guesses player has left

//chooses a new a random word and displays is clue on the page.
function newGame(){
    var randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guessesCount = MAX_GUESSES;
    guesses = "";
    updatePage();
}

//Guesses a letter. Called when the user presses the Guess button.
function guessLetter(){
    var input = document.getElementById("guess");
    var clue = document.getElementById("clue");
    var letter = input.nodeValue;
    if(guessCount == 0 || clue.innerHTML.indexOf("_") < 0 || guesses.indexOf(letter) >= 0){
        return;
    }
 guesses += letter;
 if(word.indexOf(letter) < 0){
     guessCount--;
 }   
 updatePage();
}

//Update the hangman image, word clue, etc. to the current game state.
function updatePage(){
    //update clue straing such as "h _ l l _"
    var clueString = "";
    for(var i = 0; i < word.length; i++){
        var letter = word.charAt(i);
        if(guress.indexOf(letter) >= 0){
            clueString += letter + "";
        }else{
            clueString += "_";
        }
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    //show the guesses the plays has made
var guessArea = document.getElementById("gresses");
if(guessCount == 0){
    guessArea.innerHTML = "You lost.";
}else if(clueString.indexOf("_") < 0){
    guessArea.innerHTML = "You win!!!";
}else{
    guessArea.innerHTML = "Guesses" + guesses;
}

//update hangman image
var image = document.getElementById("hangmanpic");
image.src = "img/hangman" + guessCount + ".gif";
}


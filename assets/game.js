
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var wins = 0
var losses = 0
var guesses = 9
var guessesLeft = 9
var guessedLetters = []
var letterToGuess = null

//computer randomly chooses a letter

var computerGuess =alphabet[Math.floor(Math.random() * alphabet.length)];

//guesses left function

var updateGuessesLeft = function () {
    document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

//letter to guess function

var updateLetterToGuess = function () {
    this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

var updateGuessesSoFar = function () {
    document.querySelector('#let').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
};



var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesSoFar();
    updateGuessesLeft();

};

updateGuessesLeft();
updateLetterToGuess();


document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess === letterToGuess){
            wins++;
            document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
            alert("How did you know!?!");
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
        alert("Sorry, you're not a psychic. Want to try again?");

        reset();
    }
};
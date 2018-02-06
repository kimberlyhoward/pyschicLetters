var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);

// User presses any letter and it is recorded in console log

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userGuess);

    var userGuess = event.key;

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // Here's an alert:

        {
            alert("You win! How did you know the answer?");
        }

        console.log(wins);
    }


    else {
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            guessesSoFar = [ ];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            // Here's an alert:

            {
                alert("Sorry. Try again.");
            }
            console.log(losses);
        }

        else {
            guessesLeft--;
            guessesSoFar.push(userGuess);

            console.log(guessesSoFar);
        }

    }


    var html = "<h1>The Psychic Game</h1>" +

        "<br>" + "<br>" +

        "<h3>Wins: " + wins + "</h3>" +

        "<br>" +

        "<h3>Losses: " + losses + "</h3>" +

        "<br>" +

        "<h3>Guesses left: " + guessesLeft + "</h3>" +

        "<br>" +

        "<h3>Your guesses so far: " + guessesSoFar + "</h3>"

    document.querySelector('#game').innerHTML = html;

}
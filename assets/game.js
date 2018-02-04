document.onkeyup = function (event) {

    //ctrl+r to refresh page, but also to set lettersGuessed by player to ''.
    //the 'r' was being recorded as a guess.
    if (event.keyCode == 73 && event.ctrlKey) {
        startGame();
    }

    //allows only A-Z on keyboard to be registered as answers
    else if (event.keyCode >= 65 && event.keyCode <= 90) {

        var key = event.key;
        console.log(computerChoice);
        if (guesses != 0) {
            lettersGuessed += key + ', ';
            if (key == computerChoice) {
                wins++;
                display.innerHTML = "You WIN! The computer chose " + computerChoice +
                    "<br/> To play again press any button.";
                startGame();
            }
            else if (key != computerChoice && guesses != 0) {
                guesses--;
                displayResults('Keep Guessing!', key, 'Not Telling!', guesses);
            }
        }
        else if (guesses == 0) {
            losses++;
            display.innerHTML = "You LOSE! The computer chose: " + computerChoice +
                "<br/> To play again press any button.";
            startGame();
        }
    }

    //this runs when ctrl+r is hit. shouldn't this not run? for some reason its reading the ctrl part
    //when I press ctrl+r.
    else {
        alert("Only A-Z allowed.");
    }
}

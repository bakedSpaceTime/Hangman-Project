let userGuess = '';
let userGuessList = [];

function playGame() {

    word = randomWord();

    displayHint(word);

    initializeDisplay();
}

function randomWord() {
    return words[Math.floor(Math.random() * words.length)][0];
}

function addLetterToGuess(thisbttn) {
    let letter = thisbttn.innerText;
    let currentGuess = false;
    for (let i = 0; i < word.length; i++) {
        if (letter == word[i]) {
            currentGuess = true;
            userGuessList[i] = letter;
            displayLetter(letter, i);
        }
    }

    thisbttn.changeID;

    changeScore(currentGuess);

    if (checkGuess()) {
        document.getElementById('hint').innerHTML = 'Nice job!';
        setTimeout(continueGame, 2000);
    }
}

function checkGuess() {
    return userGuessList.join('') == word;
}

function resetGame() {
    score = 0;
    lives = 7;
    userGuess = '';
    userGuessList = [];

    clearButtons()
    alphabetButtons(26)
    document.getElementById('buttonDiv').style.display = '';
    document.getElementById('score').style.display = '';
    document.getElementById('lives').style.display = '';

    clearDisplay();
    setTimeout(playGame, 50);
}

function continueGame() {
    userGuess = '';
    userGuessList = [];

    clearButtons();
    alphabetButtons(26);
    document.getElementById('buttonDiv').style.display = '';
    document.getElementById('score').style.display = '';
    document.getElementById('lives').style.display = '';

    clearDisplay();
    setTimeout(playGame, 50);
}

function gameOver() {
    document.getElementById('buttonDiv').style.display = 'None';
    document.getElementById('score').style.display = 'None';
    document.getElementById('lives').style.display = 'None';
    
    let name = prompt('Please enter your name.', 'Random Player');
    
    document.getElementById('hint').innerHTML = "Game over, " + name + "! You lost!<br>Your final score is: " + score;

    score = 0;
    lives = 7;
}

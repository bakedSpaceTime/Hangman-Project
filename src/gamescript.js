let words = [['INTEND', 'have in mind as a purpose'],
['BITCOIN', 'an online payment system that does not require an intermediary'],
['CONSTANT', 'a quantity that does not vary'],
['APPEAL', 'be attractive to'],
['TATTOO', 'a form of body modification where a design is made by inserting ink'],
['LEAGUE', 'an association of sports teams that organize matches'],
['FINANCIAL', 'involving fiscal matters'],
['ELECTRICITY', 'the set of physical phenomena associated with the presence and motion of electric charge.'],
['TERRITORY', 'the geographical area under the jurisdiction of a state'],
['RESOURCE', 'a new or reserve supply that can be drawn upon when needed'],
['ATTRIBUTE', 'a quality belonging to or characteristics of an entity'],
['COMMITTEE', 'a group of people appointed for a specific function']];

let word = '';
let score = 0
let lives = 7

let userGuess = '';
let userGuessList = [];
    // generates random word to guess
    // generates the words hint
function playGame() {

    word = randomWord();

    displayHint(word);

    initializeDisplay();
}
    //random word will be chosen for the user to guess
function randomWord() {
    return words[Math.floor(Math.random() * words.length)][0];
}
    //this will add the chosen letter to the blank line
function addLetterToGuess(thisbttn) {
    let letter = thisbttn.innerText;
    let currentGuess = false;
    let update_score = true;
    for (let i = 0; i < word.length; i++) {
        if (letter == word[i]) {
            currentGuess = true;
            userGuessList[i] = letter;
            displayLetter(letter, i);
            changeScore(currentGuess);
            update_score = false;
        }
    }

    thisbttn.changeID;

    if (update_score) {
        changeScore(currentGuess);
    }

    if (checkGuess()) {
        document.getElementById('hint').innerHTML = 'Nice job!';
        setTimeout(continueGame, 2000);
    }
}
    //checks to see if the guess is right or not
function checkGuess() {
    return userGuessList.join('') == word;
}
    //game resets to its score=0 and the lives back upto 7
    // the buttons get cleared and game will reset
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
    //game will end and will ask for users name while showing
    //their score and stating that they lost
function gameOver() {
    document.getElementById('buttonDiv').style.display = 'None';
    document.getElementById('score').style.display = 'None';
    document.getElementById('lives').style.display = 'None';

    let name = prompt('Please enter your name.', 'Random Player');

    document.getElementById('hint').innerHTML = "Game over, " + name + "! You lost!<br>Your final score is: " + score;

    score = 0;
    lives = 7;
}

let buttonArray = alphabetButtons(26);
playGame();
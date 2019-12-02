let userGuess = '';
let userGuessList = [];

function playGame(){
    // alphabetButtons(26);

    word = randomWord()
    
    displayHint(word)

    console.log(word)

    console.log(word.includes('i'))

    // drawBottomLine()
    // displayBlankLines()
    initializeDisplay()
}
    //random word from the list that will be chosen for the user to guess
function randomWord() {
    return words[Math.floor(Math.random()*words.length)][0]
}
    //adds new letter to the guess 
function addLetterToGuess(letter){
    let currentGuess;
    for(let i = 0; i < word.length; i++){
        if(letter == word[i]){
            currentGuess = true
            userGuessList[i] = letter;
            displayLetter(letter, i)
        } 
    }
    changeScore(currentGuess);

    console.log(userGuessList)
    
    if(checkGuess()){
        console.log('YOU WON')
        document.getElementById('hint').innerHTML = 'Nice job!';
        setTimeout(resetGame, 2000)
    }
}
    
function checkGuess(){
    return userGuessList.join('') == word;
}
    //this resets the game for the player to play again
function resetGame(){
    score = 0
    lives = 7
    userGuess = '';
    userGuessList = [];
    console.log('reset')

    //document.getElementById('clicked_button').style.visibility = 'visible'
    clearButtons()
    alphabetButtons(26)
    document.getElementById('buttonDiv').style.display = '';
    document.getElementById('score').style.display = '';
    document.getElementById('lives').style.display = '';

    clearDisplay()
    setTimeout(playGame, 50)
    
}

    //game ends and a new game will begin with reset scores and lives
function gameOver() {
    score = 0
    lives = 7
    
    document.getElementById('buttonDiv').style.display = 'None';
    document.getElementById('score').style.display = 'None';
    document.getElementById('lives').style.display = 'None';
    
    //document.getElementById('reset').style.display = 'None';
    //canv.clearRect(0, 0, canvas.width, canvas.height);

    let name = prompt('Please enter your name.');

    document.getElementById('hint').innerHTML= "Game over, " + name + "! You lost!";
}

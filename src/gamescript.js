
function playGame(){
    userGuess = '';
    userGuessList = [];

    // alphabetButtons(26);

    word = randomWord()

    console.log(word)

    console.log(word.includes('i'))

    // drawBottomLine()
    // displayBlankLines()
    initializeDisplay()
}

function randomWord() {
    return words[Math.floor(Math.random()*words.length)][0]
}

function addLetterToGuess(letter){
    
    for(let i = 0; i < word.length; i++){
        if(letter == word[i]){
            userGuessList[i] = letter;
            displayLetter(letter, i)
        }
    }

    console.log(userGuessList)
    
    if(checkGuess()){
        console.log('YOU WON')
        setTimeout(resetGame, 2000)
    }
}

function checkGuess(){
    return userGuessList.join('') == word;
}

function resetGame(){
    console.log('reset')
    clearDisplay()
    setTimeout(playGame, 1000)
}
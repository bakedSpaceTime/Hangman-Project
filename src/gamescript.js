
function playGame(){
    userGuess = '';
    userGuessList = [];

    // alphabetButtons(26);

    word = randomWord()

    console.log(word)

    console.log(word.includes('i'))

    


}

function randomWord() {
    return words[Math.floor(Math.random()*words.length)]
}

function addLetterToGuess(letter){
    // userGuess += letter
    // console.log(userGuess)

    
    for(let i = 0; i < word.length; i++){
        // console.log(word[i])
        if(letter == word[i]){
            userGuessList[i] = letter;
        }
    }

    console.log(userGuessList)
    
    if(checkGuess()){
        console.log('YOU WON')
        resetGame();
    }





}

function checkGuess(){
    return userGuessList.join('') == word;
}

function resetGame(){
    // clearButtons();
    playGame();
    
}
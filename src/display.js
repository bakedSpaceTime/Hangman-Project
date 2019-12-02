let disp = document.getElementById('correctLetters');

let ctx = canv.getContext('2d')

// initializeDisplay()

function initializeDisplay() {
    document.getElementById('score').innerHTML = 'Score: ' + score;     // Initalizes lives 
    document.getElementById('lives').innerHTML = 'Lives: ' + lives;     // and score

    displayBlankLines();
}

function calculateStartWidth(){
    return width * (0.5 - word.length / 2 * 0.035)
}

function displayBlankLines(){
    let out = ''
    for(let i = 0; i < word.length; i++){
        out += '_ '
    }

    disp.innerText = out;
}

function displayLetter(letter, i){
    let txt = disp.innerText;
    console.log(txt)

    let out1 = ''
    let k;
    let c;
    
    for(let j = 0; j < txt.length; j+=2){

        k = j/2
        if(letter == word[k] && i == k){
            c = (letter + ' ');
        }
        else if (j % 2 == 0){
            c = txt[j];
        }
        out1 += c + ' '
    }
    
    disp.innerText = out1;
}

function clearDisplay(){
    disp.innerHTML = '';
}


function displayHint(word) {
    let hint;
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] == word) {
            hint = words[i][1];
        }
    }
    document.getElementById('hint').innerHTML = 'Hint: ' + hint;
    console.log('Hint:', hint);
}


function changeScore(guess) {
    let scoreTag = document.getElementById('score');
    let livesTag = document.getElementById('lives');
    
    if (guess) {
        score += 1;
        scoreTag.innerHTML = 'Score: ' + score;
    } else {
        score -= 1;
        lives -= 1;
        scoreTag.innerHTML = 'Score: ' + score;
        livesTag.innerHTML = 'Lives: ' + lives;
        if (lives == 0) {
            gameOver()
        }
    }
}


let disp = document.getElementById('correctLetters');

function initializeDisplay() {
    document.getElementById('score').innerHTML = 'Score: ' + score;     // Initalizes lives 
    document.getElementById('lives').innerHTML = 'Lives: ' + lives;     // and score

    displayBlankLines();
}
    //responsiblw for the width of the random word
function calculateStartWidth() {
    return width * (0.5 - word.length / 2 * 0.035);
}
    //displays blank stops inplace of the actual word to be guessed
function displayBlankLines() {
    let out = ''
    for (let i = 0; i < word.length; i++) {
        out += '_ ';
    }

    disp.innerText = out;
}

function displayLetter(letter, i) {
    let txt = disp.innerText;

    let out1 = ''
    let k;
    let c;

    for (let j = 0; j < txt.length; j += 2) {

        k = j / 2;
        if (letter == word[k] && i == k) {
            c = (letter + ' ');
        }
        else if (j % 2 == 0) {
            c = txt[j];
        }
        out1 += c + ' ';
    }

    disp.innerText = out1;
}

function clearDisplay() {
    disp.innerHTML = '&nbsp;';
}

    //will showcase a hint related to the word to help the user
    //guess the word
function displayHint(word) {
    let hint;
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] == word) {
            hint = words[i][1];
        }
    }
    document.getElementById('hint').innerHTML = 'Hint: ' + hint;
}

    //this will up the score by one when the user has guessed the right
    //letter or will lower it by one if the user gets the wrong letter
    //if the score goes down by 1 so will the lives by 1
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
            gameOver();
        }
    }
}


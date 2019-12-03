let canv = document.getElementById('guessedLetters');

let width = window.innerWidth * 0.8;
let height = window.innerHeight * 0.2;

let ctx = canv.getContext('2d')

// initializeDisplay()

function initializeDisplay() {
    document.getElementById('score').innerHTML = 'Score: ' + score;     // Initalizes lives 
    document.getElementById('lives').innerHTML = 'Lives: ' + lives;     // and score

    canv.width = width;
    canv.height = height;
    
    canv.style.border = '2px solid blue '
    ctx.font = '35px consolas'
    ctx.fillStyle = 'yellow'
    ctx.fillRect(0,0,width,height)

    drawBottomLine();
    displayBlankLines();
}


function drawBottomLine(){

    ctx.lineWidth = 5
    ctx.strokeStyle = 'blue'
    ctx.beginPath()
    ctx.moveTo(width * 0.9, height * 0.7)
    ctx.lineTo(width * 0.1, height * 0.7)
    ctx.stroke()
}
    //responsible for width 
function calculateStartWidth(){
    return width * (0.5 - word.length / 2 * 0.035)
}
    // will display blank spots inplace of the actual word to be guessed
function displayBlankLines(){

    let w = calculateStartWidth()
       
    ctx.lineWidth = 5
    
    ctx.strokeStyle = 'blue'

    for(let i = 0; i < word.length; i++){

        console.log(word.length)

        ctx.beginPath()
        ctx.moveTo(w + i * width * 0.04, height * 0.6)
        ctx.lineTo(w + i * width * 0.04 + ctx.measureText(word[i]).width , height * 0.6)
        ctx.stroke()
        
    }
}

function displayLetter(letter, i){
    let w = calculateStartWidth()
    ctx.fillStyle = 'blue'
    ctx.fillText(letter, w + width * 0.04 * i, height * 0.55)
}

function clearDisplay(){
    ctx.fillStyle = 'yellow'
    ctx.clearRect(0, 0, width, height)
    ctx.fillRect(0,0,width,height)

    console.log(width)
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
    console.log('Hint:', hint);
}

    //this will up the score when the user has guessed right
    //or will lower the score by 1 if he guessed wrong
    //if the score goes down so will one live for each mistake
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

// Trying to resize the canvas element onresize of body doesnt work yet please help Tushya idk how the canvas is generated
function resize_canvas(){

    if (canv.width < window.innerWidth)
    {   
        width = window.innerWidth * 0.8;
        clearDisplay();
        initializeDisplay();
        // drawBottomLine();
        // displayBlankLines();
        console.log('Window resized')
    }

    if (canv.height < window.innerHeight)
    {
        height = window.innerHeight * 0.2;
        clearDisplay();
        initializeDisplay();
        // drawBottomLine();
        // displayBlankLines();
        console.log('Window resized')
    }
}
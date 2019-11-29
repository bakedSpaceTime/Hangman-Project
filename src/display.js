let canv = document.getElementById('guessedLetters');

let width = window.innerWidth * 0.8;
let height = window.innerHeight * 0.2;

let ctx = canv.getContext('2d')

// initializeDisplay()

function initializeDisplay() {
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

function calculateStartWidth(){
    return width * (0.5 - word.length / 2 * 0.035)
}

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

// Trying to resize the canvas element onresize of body doesnt work yet please help Tushya idk how the canvas is generated
function resize_canvas(){

    if (canv.width < window.innerWidth)
    {   
        width = window.innerWidth * 0.8;
        clearDisplay();
        initializeDisplay();
        // drawBottomLine();
        // displayBlankLines();
        console.log('yes')
    }

    if (canv.height < window.innerHeight)
    {
        height = window.innerHeight * 0.2;
        clearDisplay();
        initializeDisplay();
        // drawBottomLine();
        // displayBlankLines();
        console.log('yes')
    }
}
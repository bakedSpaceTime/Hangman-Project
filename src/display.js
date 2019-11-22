let canv = document.getElementById('guessedLetters');

let width = window.innerWidth * 0.8;
let height = window.innerHeight * 0.2;

let ctx = canv.getContext('2d')

canv.width = width;
canv.height = height;

canv.style.border = '2px solid blue '
ctx.font = '35px consolas'
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'blue'

function drawBottomLine(){
    ctx.moveTo(width * 0.9, height * 0.7)
    ctx.lineTo(width * 0.1, height * 0.7)
    ctx.stroke()
}

function calculateStartWidth(){
    return width * (0.5 - word.length / 2 * 0.04)
}

function displayBlankLines(){

    // clearDisplay()
    // drawBottomLine()

    let w = calculateStartWidth()
       
    ctx.lineWidth = 5
    
    for(let i = 0; i < word.length; i++){
        // ctx.fillText(word[i], w + width * 0.04 * i, height * 0.55)

        ctx.moveTo(w + i * width * 0.04, height * 0.6)
        ctx.lineTo(w + i * width * 0.04 + ctx.measureText(word[i]).width , height * 0.6)
        ctx.stroke()
        
    }
}

function displayLetter(letter, i){
    let w = calculateStartWidth()
    
    ctx.fillText(letter, w + width * 0.04 * i, height * 0.55)
}

function clearDisplay(){
    ctx.clearRect(0, 0, width, height)

    console.log(width)
}





function alphabetButtons(n){

    let i = 0
    while(i < n){
        createLetterButton(i);
        i ++
    }    
}

function createLetterButton(dec){
    
    let node = document.createElement('button');

    node.style.margin = '5px'
    node.style.width = '30px'
    node.className = 'buttons'
    node.addEventListener('click', function(){addLetterToGuess(this.innerText)})

    node.appendChild(document.createTextNode(decToAlpha(dec)))

    document.getElementById('buttonDiv').appendChild(node)
    node.onclick = function clicked_button() {
        node.id = 'clicked_button'
    }
}

function decToAlpha(code){
    return String.fromCharCode(code + 65);
}

function buttClick(name){
    console.log('Button ' + name + ' was clicked');

}

function clearButtons(){
    let butdiv = document.getElementById('buttonDiv');

    while(butdiv.firstChild){
        butdiv.removeChild(butdiv.firstChild)
    }

    buttonList = [];
}

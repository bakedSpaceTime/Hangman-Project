    //creates an array of all the alphabet buttons on screen
function alphabetButtons(n) {

    let btnArr = [];

    let i = 0;
    while (i < n) {
        btnArr.push(new createLetterButton(i));
        i++;
    }

    return btnArr;
}
    //creates the letters as buttons for the user to use
function createLetterButton(dec) {
    this.node = document.createElement('button');

    this.node.style.margin = '5px';
    this.node.style.width = '30px';
    this.node.className = 'buttons';

    this.node.appendChild(document.createTextNode(decToAlpha(dec)));

    this.addToBody = function () {
        document.getElementById('buttonDiv').appendChild(this.node);
    }

    this.changeID = function () {
        this.id = 'clicked_button';
    }

    this.node.addEventListener('click', function () { addLetterToGuess(this) });
    this.node.addEventListener('click', this.changeID);
    this.addToBody();
}
    //converts  a decimal to string
function decToAlpha(code) {
    return String.fromCharCode(code + 65);
}
    //clears the button that has been used
function clearButtons() {
    let butdiv = document.getElementById('buttonDiv');

    while (butdiv.firstChild) {
        butdiv.removeChild(butdiv.firstChild);
    }

    buttonList = [];
}

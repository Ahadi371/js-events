function makeRed() {
  document.body.style.backgroundColor ='red';  
}

let blueButton =document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
//anonymas
const greenButton = document.getElementById('make-green-button');
greenButton.onclick =function () {
    document.body.style.backgroundColor = 'green';
    
}
const goldenButton = document.getElementById('make-goldenrod');
goldenButton,addEventListener('click', makeGoldenRod)
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}
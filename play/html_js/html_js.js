console.log('we are connected!');
console.log(document)

const mainDisplay = document.querySelector('.display');
const mainButton = document.querySelector('.changeColor');
const invaderContainer = document.querySelector('.invader-container');
const invader = document.querySelector('.incader');
const secButton = document.querySelector('#subButton');

// mainDisplay.style.color = 'blue';

// mainDisplay.innerHTML = 'Pies kolegi';

// mainButton.style.backgroundColor = "red";

function changeDisplayText() {
    mainDisplay.innerHTML = "You are the best!";
    mainDisplay.style.color = "brown";
    mainButton.innerHTML = "You did it!"
    mainButton.style.backgroundColor = "white";
}

function addTwo() {
    mainDisplay.innerHTML = parseInt(mainDisplay.innerHTML) + 2;
}

function addInvader() {
    let newInvader = document.createElement('div');
    newInvader.classList.add('invader');
    invaderContainer.appendChild(newInvader);
}

function subInvader() {
    // invaderContainer.removeChild.querySelector('.invader');
    invaderContainer.removeChild(invaderContainer.getElementsByClassName('invader')[0]);
}

mainButton.addEventListener("click", addInvader);
secButton.addEventListener("click", subInvader);





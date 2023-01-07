let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let stopwatch = document.querySelector('.stopwatch');
let waterwatch = document.querySelector('.waterwatch');
console.log('sw', document.querySelector('.stopwatch').innerHTML);
let int = null;
let water = null;
let glass = null;
let avarageWaterLoss = 0.8;
let lostLiters = 0.00;
let glassesCounter = 0;

document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    if(water!==null){
        clearInterval(water);
    }
    if(glass!==null){
        clearInterval(glass);
    }
    int = setInterval(displayTimer,10);
    water = setInterval(displayWater,120);
    glass = setInterval(displayGlasses,2500);
    document.getElementById('start').className = 'pressed';
    document.getElementById('pause').classList.remove('pressed');
});
document.getElementById('pause').addEventListener('click', ()=>{
    clearInterval(int);
    clearInterval(water);
    clearInterval(glass);
    document.getElementById('pause').className = 'pressed';
    document.getElementById('start').classList.remove('pressed');
});
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    clearInterval(water);
    clearInterval(glass);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    lostLiters = 0;
    glassesCounter = 0;
    stopwatch.innerHTML = '00 : 00';
    waterwatch.innerHTML = '0.00 l / 0 glasses';
    document.getElementById('start').classList.remove('pressed');
    document.getElementById('pause').classList.remove('pressed');
    document.querySelector('.glasses-container').textContent = '';
});
function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
 let h = hours < 10 ? '0' + hours : hours;
 let m = minutes < 10 ? '0' + minutes : minutes;
 let s = seconds < 10 ? '0' + seconds : seconds;
 let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
 stopwatch.innerHTML = ` ${m} : ${s} `;
}

function displayWater(){
    lostLiters+=0.01;
    if (lostLiters < 2) {
        waterwatch.innerHTML = parseFloat(lostLiters).toFixed(2) + ' liter' + ' / ' + parseInt(glassesCounter) + ' glasses';
    } else {
        waterwatch.innerHTML = parseFloat(lostLiters).toFixed(2) + ' liters' + ' / ' + parseInt(glassesCounter) + ' glasses';
    }
}

function displayGlasses(){
    const fullGlass = document.createElement('img');
    fullGlass.classList.add('glass');
    fullGlass.setAttribute("src", "./glass.png");
    document.querySelector('.glasses-container').appendChild(fullGlass);
    glassesCounter += 1;
}
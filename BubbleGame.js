   var hitrn;
   var score =0;
   
   function makeBubbles() {
    var clutter =   "";

for (let i = 0; i < 112; i++) {
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#btm").innerHTML = clutter;
}

var timer = 60;
function runtimer(params) {
   var timeint = setInterval(function()  {
        if (timer>0) {
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#btm").innerHTML = `<h1> GAME OVER <\h1>`;
        }
       
    }, 1000);
}

function newtarget() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}

function incscore() {
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#btm").addEventListener("click",function (dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum==hitrn) {
        incscore();
        makeBubbles();
        newtarget();
    }
})

makeBubbles();
runtimer();
newtarget();

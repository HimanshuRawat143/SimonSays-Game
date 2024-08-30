let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let purple = document.querySelector(".purple");
let pink = document.querySelector(".pink");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
let level = 0;
let started = false;
let btnarray = ["purple","green","yellow","pink"];
let gameSeq = [];
let userSeq = [];
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game started !!!");
        started = true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function userFlash(btn){
    btn.classList.add("Userflash");
    setTimeout(function(){
        btn.classList.remove("Userflash");
    },100);
}

function levelup(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let rand = Math.floor(Math.random()*3);
    let randcolor = btnarray[rand];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    btnflash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML  = `Game Over ! Your score was <b> ${level}</b><br> Press any key to start !!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";  
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=  [];
    userSeq = [];
    level = 0;
}


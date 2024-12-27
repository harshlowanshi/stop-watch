const head=document.querySelector("#head")

const start =document.querySelector("#Start")

const stp = document.querySelector("#Stop")

const reset = document.querySelector("#Reset")
// console.log(reset);

let time=0;
let value;
function startBtn (){
    value=setInterval(()=>{
        time =time+1
     head.innerText= time   
    },350)
}


function stopBtn(){
    clearInterval(value)
}

function resetBtn (){
    clearInterval(value)
    head.innerText=0
    time=0
}
let runningTotal = 0;
let buffer = "0";
let previousOperator = null
const screen = document.querySelector(".screen");

document.querySelector(".calc-buttons")
.addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
})

function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value) {
    if (buffer==="0") {
        buffer=value;
    }

    else {
        buffer += value;
    }
        
}

function handleSymbol(value) {
    switch(value) {
        case 'C':
    buffer = "0";
    runningTotal = 0;
    previousOperator = null;
    break;

    case "=":
    if (previousOperator===null){
        return;
    }
      flushOperation(parseInt(buffer));
      previousOperator=null;
      buffer = " "+runningTotal;
      runningTotal = 0;
      break;

        case "←":
        if(buffer.length===1) {
            buffer="0";
        } else{
            buffer=buffer.substring(0, buffer.length-1);
        }
        break;

        default: handleMath(value);
        break;
    }

}

function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if(runningTotal===0) {
        runningTotal= intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator =  value;
    buffer="0";
}

function flushOperation(intBuffer) {
    if(previousOperator === "+" ) {
        runningTotal += intBuffer;
    }
    
    if (previousOperator=== "-" ) {
        runningTotal -= intBuffer;
    } 

    if (previousOperator==="*") {
        runningTotal *= intBuffer;
    }

     if(previousOperator === "/") {
        runningTotal /= intBuffer;
    }
}


function rerender()  {
    screen.innerText=buffer;
}


/*
class Calculator{
    constructor(screen){
        this.screen = screen;  
        this.call() 
        this.clear();
    }

    call(){
        this.buffer =" "
        this.prevtotal = 0 
     this.operation= null
    }

    clear(value){
       switch(value){
        case "C":
 this.buffer =" "
 this.prevtotal = " "
 this.operation  = null
    }}

delete(value){
    switch(value){
        case '←':
this.buffer = this.buffer.toString().slice(0, -1)
break}
}


appendNumber(value){
this.buffer = this.buffer.toString() + value.toString()
}

chooseOperation(value){
 if(this.buffer===" ") return

 if(this.prevtotal!==''){
    this.compute()
 }

    this.Operation= value;
    this.prevtotal = this.buffer
      this.buffer =" "
  }
    


compute(){
     let computation
const current = parseInt(this.buffer)
const prev = this.prevtotal
if(this.Operation==="+"){
      computation = current + prev
}
    if(this.Operation==="-"){
        computation = prev- current
    }

if(this.Operation==="*"){
        computation = current * prev
}
if(this.Operation==="/"){
        computation = current/prev
       
    }
    this.buffer = computation
    this.Operation = null
    this.prevtotal =" "
}



rerender(){
this.screen.innerText= this.buffer
}
}


const screen = document.querySelector(".screen");



const calculator = new Calculator(screen);



const button = document.querySelector(".calc-buttons");

button.addEventListener("click", function(event){
    buttonClick(event.target.innerText)
})
    
    
function buttonClick(value){
    if(isNaN(parseInt(value))){
        calculator.chooseOperation(value)
        calculator.compute(value)
        calculator.delete(value)
        calculator.clear(value)
        calculator.rerender()
    }  
    

    else{
    calculator.appendNumber(value)
    calculator.rerender()
}
}
*/

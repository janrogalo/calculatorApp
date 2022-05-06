const display = document.querySelector(".calculatorDisplay");
const displaySecondNumber = document.querySelector(".calculatorDisplaySecondNumber");
const displaySign = document.querySelector(".opSign");
const nums = [...document.getElementsByClassName("button")];
const mathOps = [...document.getElementsByClassName("op")];
let operationIsSet = false;
let commaIsSet = false;
let firstNumber = "";
let secondNumber = "";
let ops = "";

nums.forEach(button => {
    button.addEventListener("click", (event)=>{
        const digitToAppend = event.target.dataset.name;
        if(operationIsSet == false){
            if (event.target.dataset.name == '.'){
                display.innerHTML += `<img src="img/digitComma.png" class="calculatorDisplayImg">`;
            }
            else{
        display.innerHTML += `<img src="img/digit${event.target.dataset.name}.png" class="calculatorDisplayImg">`;}
        firstNumber += digitToAppend;
        }
        else{
            if (event.target.dataset.name == '.'){
                displaySecondNumber.innerHTML += `<img src="img/digitComma.png" class="calculatorDisplayImg">`;
            }
            else{
            displaySecondNumber.innerHTML += `<img src="img/digit${event.target.dataset.name}.png" class="calculatorDisplayImg">`; 
            }
            secondNumber += digitToAppend;
        } 
    })
})

mathOps.forEach(op => {
    op.addEventListener("click", (event)=>{displaySecondNumber.innerHTML = `<img src="img/${event.target.dataset.name}.png" class="calculatorDisplayImg">`;
    operationIsSet = true;
    commaIsSet = false;

    if(event.target.dataset.name == "subtract")ops = '-';
    else if(event.target.dataset.name == "add")ops = '+';
    else if(event.target.dataset.name == "multiply")ops = '*';
    else ops = '/';
    })  
})












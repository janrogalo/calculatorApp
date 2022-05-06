const result = document.querySelector(".calculatorDisplayResults");
const erase = document.querySelector(".erase");
const calculate = document.querySelector(".imgCalculate");


function numberToDisplay(number, displayArea){
    for( let i = 0; i < number.length; i++ ){
        switch(number[i]) {
                    case '1':
                        displayArea.innerHTML += `<img src="img/digit1.png" class="calculatorDisplayImg">`;    
                      break;
                    case '2':
                        displayArea.innerHTML += `<img src="img/digit2.png" class="calculatorDisplayImg">`;    
                    break;
                    case '3':
                        displayArea.innerHTML += `<img src="img/digit3.png" class="calculatorDisplayImg">`;    
                    break;
                    case '4':
                        displayArea.innerHTML += `<img src="img/digit4.png" class="calculatorDisplayImg">`;    
                    break;
                    case '5':
                        displayArea.innerHTML += `<img src="img/digit5.png" class="calculatorDisplayImg">`;    
                    break;
                    case '6':
                        displayArea.innerHTML += `<img src="img/digit6.png" class="calculatorDisplayImg">`;    
                    break;
                    case '7':
                        displayArea.innerHTML += `<img src="img/digit7.png" class="calculatorDisplayImg">`;    
                    break;
                    case '8':
                        displayArea.innerHTML += `<img src="img/digit8.png" class="calculatorDisplayImg">`;    
                    break;
                    case '9':
                        displayArea.innerHTML += `<img src="img/digit9.png" class="calculatorDisplayImg">`;    
                    break;
                    case '0':
                        displayArea.innerHTML += `<img src="img/digitZero.png" class="calculatorDisplayImg">`;    
                    break;
                    case '.':
                        displayArea.innerHTML += `<img src="img/digitComma.png" class="calculatorDisplayImg">`;    
                    break;
       }
   }
}

function operations(opChar, firstNumber, secondNumber){
switch(opChar){
    case '-':
       return `${Number(firstNumber) - Number(secondNumber)}`;
       break;
    case '+':
        return `${Number(firstNumber) + Number(secondNumber)}`;
   
    break;
    case '*':
        return `${Number(firstNumber) * Number(secondNumber)}`;
    break;
    case '/':
        try{
        if (Number(secondNumber == 0)) throw new Error ("Cannot divide by 0");
        return `${Number(firstNumber) / Number(secondNumber)}`;
        }
        catch(Error){alert('NOPE! Number 2 is a 0. Cannot divide by 0...');
            console.error('NOPE! Number 2 is a 0. Cannot divide by 0...');
    }
    break;
}
}

calculate.addEventListener('click', ()=>{
    let calculationResult ="";
    result.innerHTML= "";
    if((operationIsSet == true) && secondNumber != ""){
    numberToDisplay(operations(ops, firstNumber, secondNumber), result);
    ops = "";
    secondNumber="";
}
})

erase.addEventListener('click', ()=>{
    result.innerHTML="";
    displaySecondNumber.innerHTML="";
    display.innerHTML="";
    operationIsSet = false;
    commaIsSet = false;
    firstNumber = "";
    secondNumber = "";
})
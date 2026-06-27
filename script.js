console.log("Welcome! where doing calculation is just few clicks away!");




while(ans === "yes"){
  let firstNumber = Number(prompt("Enter the first number: "));
let operator = (prompt("Enter the operator(+,-,*,/):")).toLowerCase();
let secondNumber = Number(prompt("Enter the second number: "));

let ans = "yes";
switch(operator){
  case '+':
    console.log(firstNumber+" + "+secondNumber+" = "+(firstNumber+secondNumber));
    break;
  case '-':
    console.log(firstNumber+" - "+secondNumber+" = "+(firstNumber-secondNumber));
    break;
  case '*':
    console.log(firstNumber+" * "+secondNumber+" = "+(firstNumber*secondNumber));
    break;
  case '/':
    if(secondNumber === 0){
      console.log("Division by zero is not allowed.")
    }
    else{
    console.log(firstNumber+" / "+secondNumber+" = "+(firstNumber/secondNumber));
    }
    break;
  default:
    console.log("Invalid choice! Please choose from the available       options.");
}

ans = prompt("Do you want to continue?");
}

console.log("Thank you for using our calculator!");
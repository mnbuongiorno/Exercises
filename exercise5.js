//perfecting calculator

class Calculator {
  constructor() {}
  add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  substract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
  }
  multiplicate(num1, num2) {
    return parseInt(num1) * parseInt(num2);
  }
  divide(num1, num2) {
    return parseInt(num1) / parseInt(num2);
  }
  exponentiate(num, exp) {
    return parseInt(num) ** parseInt(exp);
  }
  squaring(num) {
    return Math.sqrt(num);
  }
  cubing(num) {
    return Math.cbrt(num);
  }
}

const calculator = new Calculator();

alert("What operation do you want to do?");
let operation = prompt(
  "1: Addition, 2: Substraction, 3: Multiplication, 4: Division, 5: Exponentiation, 6: Squaring, 7: Cubing"
);

if (operation == 1) {
  let number1 = prompt("First number to add");
  let number2 = prompt("Second number to add");
  result = calculator.add(number1, number2);
  alert(`Your result is ${result}`);
} else if (operation == 2) {
  let number1 = prompt("First number to substract");
  let number2 = prompt("Second number to substract");
  result = calculator.substract(number1, number2);
  alert(`Your result is ${result}`);
} else if (operation == 3) {
  let number1 = prompt("First number to multiplicate");
  let number2 = prompt("Second number to multiplicate");
  result = calculator.multiplicate(number1, number2);
  alert(`Your result is ${result}`);
} else if (operation == 4) {
  let number1 = prompt("First number to divide");
  let number2 = prompt("Second number to divide");
  result = calculator.divide(number1, number2);
  alert(`Your result is ${result}`);
} else if (operation == 5) {
  let number1 = prompt("Number to exponentiate");
  let number2 = prompt("Exponent");
  result = calculator.exponentiate(number1, number2);
  alert(`Your result is ${result}`);
} else if (operation == 6) {
  let number1 = prompt("Number to square");
  result = calculator.squaring(number1);
  alert(`Your result is ${result}`);
} else if (operation == 7) {
  let number1 = prompt("Number to cubic");
  result = calculator.cubing(number1);
  alert(`Your result is ${result}`);
} else {
  alert("Operation not found");
}

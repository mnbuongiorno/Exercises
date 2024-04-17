const add = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};
const substract = (num1, num2) => {
  return parseInt(num1) - parseInt(num2);
};
const multiplicate = (num1, num2) => {
  return parseInt(num1) * parseInt(num2);
};
const divide = (num1, num2) => {
  return parseInt(num1) / parseInt(num2);
};

alert("What operation do you want to do?");
let operation = prompt(
  "1: addition, 2: substraction, 3: multiplication, 4: division"
);

if (operation == 1) {
  let number1 = prompt("first number to add");
  let number2 = prompt("second number to add");
  result = add(number1, number2);
  alert(`Your result is ${result}`);
} else if (operation == 2) {
  let number1 = prompt("first number to substract");
  let number2 = prompt("second number to substract");
  result = substract(number1, number2);
  alert(`Your result is ${result}`);
} else if (operation == 3) {
  let number1 = prompt("first number to multiplicate");
  let number2 = prompt("second number to multiplicate");
  result = multiplicate(number1, number2);
  alert(`Your result is ${result}`);
} else if (operation == 4) {
  let number1 = prompt("first number to divide");
  let number2 = prompt("second number to divide");
  result = divide(number1, number2);
  alert(`Your result is ${result}`);
} else {
  alert("Operation not found");
}

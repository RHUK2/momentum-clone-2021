// Node
const nums = document.querySelectorAll(".js-num");
const result = document.querySelector(".js-result");
const clear = document.querySelector(".js-clear");
const operators = document.querySelectorAll(".js-operator");

// Global Data
let numtemp = [];
let optemp = [];
let showValue = "";

// function
function handleNumBtn(e) {
  if (showValue.length >= 10) return;
  showValue += e.target.textContent;
  result.textContent = showValue;
}
function handleClear(e) {
  result.textContent = "0";
  showValue = "";
  numtemp.length = 0;
  optemp.length = 0;
}
function handleCalc(e) {
  if (showValue === "") return;

  let answer = null;
  const num = parseInt(showValue, 10);
  numtemp.push(num);
  optemp.push(e.target.textContent);

  if (numtemp.length === 2) {
    switch (optemp.shift()) {
      case "+":
        answer = numtemp.shift() + numtemp.shift();
        break;
      case "-":
        answer = numtemp.shift() - numtemp.shift();
        break;
      case "*":
        answer = numtemp.shift() * numtemp.shift();
        break;
      case "/":
        answer = numtemp.shift() / numtemp.shift();
        break;
      default:
        break;
    }
    numtemp.push(answer);
    result.textContent =
      answer.toString().length >= 10 ? answer.toExponential(4) : answer;
  }

  if (optemp[0] === "=") {
    numtemp.length = 0;
    optemp.length = 0;
  }
  showValue = "";
}

// Event
nums.forEach((num) => {
  num.addEventListener("click", handleNumBtn);
});
operators.forEach((operator) => {
  operator.addEventListener("click", handleCalc);
});
clear.addEventListener("click", handleClear);

let a = "0";
let b = "";
let operator = "";

const display = document.querySelector("#display");
const h1 = document.createElement("h1");
display.appendChild(h1);

const numButtons = document.querySelector(".numbers");
numButtons.addEventListener("click", (e) => {
  const number = e.target.textContent;
  if (e.target.tagName !== "BUTTON") return;
  if (number === "." && (operator === "" ? a.includes(".") : b.includes("."))) {
    return;
  }
  if (operator === "") {
    if (a === "0" && number === "00") return;
    if (a === "0") a = "";
    a += number;
  } else if (operator === "=") {
    a = "";
    operator = "";
    a += number;
  } else b += number;
  updateDisplay();
  return;
});
const opButton = document.querySelector(".operations");
opButton.addEventListener("click", (e) => {
  const op = e.target.textContent;
  if (e.target.tagName !== "BUTTON") return;
  if (op === "c") {
    a = "0";
    b = "";
    operator = "";
    updateDisplay();
    return;
  }
  if (op === "=") {
    if (b !== "" && operator !== "") {
      a = String(operate(a, b, operator));
    }
    b = "";
    operator = "=";
  } else if (b !== "") {
    a = String(operate(a, b, operator));
    b = "";
    operator = op;
  } else operator = op;
  updateDisplay();
});

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  const answer = a * b;
  return Number.isInteger(answer) ? answer : answer.toFixed(2);
}

function divide(a, b) {
  const answer = a / b;
  return Number.isInteger(answer) ? answer : answer.toFixed(2);
}

function operate(a, b, operator) {
  let answer;
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      answer = add(a, b);
      break;
    case "-":
      answer = substract(a, b);
      break;
    case "*":
      answer = multiply(a, b);
      break;
    case "/":
      answer = divide(a, b);
      break;
  }
  return answer;
}

function updateDisplay() {
  h1.textContent = operator === "=" ? a : `${a} ${operator} ${b}`;
}
updateDisplay();

const firstNumber = document.querySelector("#num1");
const secondNumber = document.querySelector("#num2");
const resultado = document.querySelector(".resultado");

const suma = document.querySelector("#suma");
const resta = document.querySelector("#resta");
const multiplicacion = document.querySelector("#multiplicacion");
const division = document.querySelector("#divicion");

suma.addEventListener("click", () => {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    const num1 = parseInt(firstNumber.value, 10);
    const num2 = parseInt(secondNumber.value, 10);
    const result = num1 + num2;
    resultado.innerText = result;
  } else {
    resultado.innerText = `.`;
    alert("Por favor llenar los espacios");
  }
});

resta.addEventListener("click", () => {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    const num1 = parseInt(firstNumber.value, 10);
    const num2 = parseInt(secondNumber.value, 10);
    const result = num1 - num2;
    resultado.innerText = result;
  } else {
    resultado.innerText = `.`;
    alert("Por favor llenar los espacios");
  }
});

multiplicacion.addEventListener("click", () => {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    const num1 = parseInt(firstNumber.value, 10);
    const num2 = parseInt(secondNumber.value, 10);
    const result = num1 * num2;
    resultado.innerText = result;
  } else {
    resultado.innerText = `.`;
    alert("Por favor llenar los espacios");
  }
});

division.addEventListener("click", () => {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    const num1 = parseInt(firstNumber.value, 10);
    const num2 = parseInt(secondNumber.value, 10);
    const result = num1 / num2;
    resultado.innerText = result;
  } else {
    resultado.innerText = `.`;
    alert("Por favor llenar los espacios");
  }
});
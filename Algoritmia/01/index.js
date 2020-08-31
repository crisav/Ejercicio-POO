const firstNumber = document.querySelector("#num1");
const secondNumber = document.querySelector("#num2");
const resultado = document.querySelector(".resultado");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    const num1 = parseInt(firstNumber.value, 10);
    const num2 = parseInt(secondNumber.value, 10);
    const result = (num1 + num2) / 2;
    resultado.innerText = `Promedio entre ${num1} y ${num2} es: ${result}`;
  } else {
    resultado.innerText = `.`;
    alert("Por favor llenar los espacios");
  }
});
const firstNumber = document.querySelector("#num1");
const secondNumber = document.querySelector("#num2");
const thirdNumber = document.querySelector("#num3");
const resultado = document.querySelector(".resultado");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    const num1 = parseFloat(firstNumber.value);
    const num2 = parseFloat(secondNumber.value);
    const num3 = parseFloat(thirdNumber.value );

    const result = ((num1 + num2 + num3) / 3).toFixed(1);
    resultado.innerText = `Promedio entre ${num1}, ${num2} Y ${num3} es: ${result}`;
  } else {
    resultado.innerText = `.`;
    alert("Por favor llenar los espacios");
  }
});
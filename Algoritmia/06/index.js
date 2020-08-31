const firstNumber = document.querySelector("#num1");
const secondNumber = document.querySelector("#num2");
const resultado = document.querySelector(".resultado");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0 ) {
    const num1 = parseInt(firstNumber.value, 10);
    const num2 = parseInt(secondNumber.value, 10);
    if ( num1 < num2 ) {
      resultado.innerText = `La edad mayor es ${num2}`;
    } else if (num1 === num2 ) {
      resultado.innerText = `ambos tienen los mismos años: ${num2}`;
    } else {
      resultado.innerText = `La edad mayor es ${num1}`;
    }
  } else {
    resultado.innerText = `.`;
    alert("Por favor llenar los espacios");
  }
});
const firstNumber = document.querySelector("#num1");
const secondNumber = document.querySelector("#num2");
const thirdNumber = document.querySelector("#num3");
const resultado = document.querySelector(".resultado");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0 && thirdNumber.value.length > 0) {
    const num1 = parseInt(firstNumber.value, 10);
    const num2 = parseInt(secondNumber.value, 10);
    const num3 = parseInt(thirdNumber.value, 10 );
    if ( num1 < num2 ) {
      if ( num2 < num3 ) {
        resultado.innerText = `El número mayor es ${num3}`;
      } else {
        resultado.innerText = `El número mayor es ${num2}`;
      } 
    } else if (num1 > num3 ) {
      resultado.innerText = `El número mayor es ${num1}`;
    } 
  } else {
    resultado.innerText = `.`;
    alert("Por favor llenar los espacios");
  }
});
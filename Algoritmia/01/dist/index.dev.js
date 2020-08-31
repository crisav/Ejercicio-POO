"use strict";

var firstNumber = document.querySelector("#num1");
var secondNumber = document.querySelector("#num2");
var resultado = document.querySelector(".resultado");
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    var num1 = parseInt(firstNumber.value, 10);
    var num2 = parseInt(secondNumber.value, 10);
    var result = (num1 + num2) / 2;
    resultado.innerText = "Promedio entre ".concat(num1, " y ").concat(num2, " es: ").concat(result);
  } else {
    resultado.innerText = ".";
    alert("Por favor llenar los espacios");
  }
});
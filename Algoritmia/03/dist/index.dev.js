"use strict";

var firstNumber = document.querySelector("#num1");
var secondNumber = document.querySelector("#num2");
var resultado = document.querySelector(".resultado");
var suma = document.querySelector("#suma");
var resta = document.querySelector("#resta");
var multiplicacion = document.querySelector("#multiplicacion");
var division = document.querySelector("#divicion");
suma.addEventListener("click", function () {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    var num1 = parseInt(firstNumber.value, 10);
    var num2 = parseInt(secondNumber.value, 10);
    var result = num1 + num2;
    resultado.innerText = result;
  } else {
    resultado.innerText = ".";
    alert("Por favor llenar los espacios");
  }
});
resta.addEventListener("click", function () {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    var num1 = parseInt(firstNumber.value, 10);
    var num2 = parseInt(secondNumber.value, 10);
    var result = num1 - num2;
    resultado.innerText = result;
  } else {
    resultado.innerText = ".";
    alert("Por favor llenar los espacios");
  }
});
multiplicacion.addEventListener("click", function () {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    var num1 = parseInt(firstNumber.value, 10);
    var num2 = parseInt(secondNumber.value, 10);
    var result = num1 * num2;
    resultado.innerText = result;
  } else {
    resultado.innerText = ".";
    alert("Por favor llenar los espacios");
  }
});
division.addEventListener("click", function () {
  if (firstNumber.value.length > 0 && secondNumber.value.length > 0) {
    var num1 = parseInt(firstNumber.value, 10);
    var num2 = parseInt(secondNumber.value, 10);
    var result = num1 / num2;
    resultado.innerText = result;
  } else {
    resultado.innerText = ".";
    alert("Por favor llenar los espacios");
  }
});
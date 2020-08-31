const mes = document.querySelector("#num");
const resultado = document.querySelector(".resultado");
const btn = document.querySelector(".btn");
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

btn.addEventListener("click", () => {
  // console.log(meses[parseInt(mes.value, 10)-1]);
  switch (mes.value) {
    case "1":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Enero`;
      break;

    case "2":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Febrero`;
      break;

    case "3":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Marzo`;
      break;

    case "4":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Abril`;
      break;

    case "5":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Mayo`;
      break;

    case "6":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Junio`;
      break;

    case "7":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Julio`;
      break;

    case "8":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Agosto`;
      break;

    case "9":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Septiembre`;
      break;

    case "10":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Octubre`;
      break;

    case "11":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Noviembre`;
      break;

    case "12":
      resultado.innerText = `El numero ${mes.value} corresponde al mes de Diciembre`;
      break;

    default:
      resultado.innerText = `.`;
      alert('por favor escriba un número entre el 1 al 12');
      break;
  }
});
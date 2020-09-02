const nombre = document.querySelector('.nombre'),
      edad = document.querySelector('.edad'),
      genero = document.querySelector('.genero'),
      peso = document.querySelector('.peso'),
      altura = document.querySelector('.altura'),
      resultado = document.querySelector('.resultado'),
      btn = document.querySelector('.btn');

btn.addEventListener("click", () => {
  if (nombre.value.length > 0 && edad.value.length > 0 && genero.value.length > 0 && peso.value.length > 0 && altura.value.length > 0 ) {
    const persona1 = new Persona(
      nombre.value,
      parseFloat(edad.value),
      genero.value,
      peso.value,
      altura.value
    );
    const persona2 = Persona.constructor2(
      nombre.value,
      parseFloat(edad.value),
      genero.value
    );
    const persona3 = Persona.constructor3();
    resultado.innerHTML= `
      <h2>Primero objeto:</h2>
      <p>con las propiedades enviadas por el usuario</p>
      <p>${ persona1.toString }</p>
      <p>${ persona1.esMayorDeEdad() }</p>
      <h2>Segundo objeto:</h2>
      <p>con las propiedades nombre, edad y genero enviadas por el usuario</p>
      <p>${ persona2.toString }</p>
      <p>${ persona2.esMayorDeEdad() }</p>
      <h2>Tercer objeto:</h2>
      <p>con las propiedades por defecto</p>
      <p>${ persona3.toString }</p>
      <p>${ persona3.esMayorDeEdad() }</p>
    `
  } else {
    alert('por favor llena todos los espacion')
  }
});
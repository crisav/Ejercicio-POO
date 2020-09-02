class Persona {

  // con metodos estaticos simulamos multiples constructores ya que en javscript no tenemos esta opción
  static constructor2( nombre, edad, genero ) {
    return new Persona( nombre, edad, genero, 82, 184 );
  }

  static constructor3() {
    return new Persona( 'Maria Albornoz', 25, 'm', 70, 174 );
  }

  #genero = 'H';
  nombre = '';
  edad = 16;
  dni = 'RTRETE234234';
  peso = 0;
  altura = 0;

  constructor( nombre, edad, genero, peso, altura ) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
    this.setGenero = genero;
  }

  set setGenero(genero){
    if (genero === 'H' || genero === 'M' || genero === 'h' || genero === 'm' ) {
      this.#genero = genero.toUpperCase();
    } else {
      this.#genero = 'H';
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return 'La persona es mayor de edad';
    } else {
      return 'La persona es menor de edad';
    }
  }

  get toString() {
    return `${ this.nombre } es de genero ${this.#genero}, tiene ${ this.edad } años, su DNI es ${this.dni}, mide ${this.altura} Cm y pesa ${this.peso} Kg `;
  }

}


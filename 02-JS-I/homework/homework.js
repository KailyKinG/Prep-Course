// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
<<<<<<< HEAD
const nuevaString = "KailyKinG EDK";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 167102433;
=======
const nuevaString = "Romelia Culona Exquisita";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2022;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x - y;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x * y;
=======
  let result = x * y;
  return result;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x / y;
=======
  let divide = x / y;
  return divide;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  return x === y;
=======
  if(x === y){
   return true;
  }else{
   return false;
  }
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  return num < 90;
=======
  if(num < 90){
   return true;
  }
  return false;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
<<<<<<< HEAD
  return  x % y;
=======
  let resto = x % y;
  return resto;
  
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  return num % 2 === 0;
=======
  let result_1 = true;
  let result_2 = false;
  if(num % 2 === 0){
   return result_1;
  }else{
   return result_2;
  }

>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 === 1;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return num * num;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
<<<<<<< HEAD
  return num * (num * num);
=======
  const alCubo = Math.pow(num, 3);
  return alCubo;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
<<<<<<< HEAD
  return Math.pow(num, exponent);
=======
  const rExponente = Math.pow(num, exponent);
  return rExponente;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
<<<<<<< HEAD
  return Math.round(num);
=======
  const masProximo = Math.round(num);
  return masProximo;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
<<<<<<< HEAD
  return Math.random(1);
=======
  const fortuito = Math.random(1);
  return fortuito;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
<<<<<<< HEAD
  if(numero === 0){
   return false;
  }
  if(numero > 0){
   return "Es positivo";
  }
  return "Es negativo";
=======
  const positive = "Es positivo";
  const negative = "Es negativo";

  if(numero === 0) return false;
  if(numero < 0) return negative;
  if(numero > 0) return positive;
  
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str+"!";
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
<<<<<<< HEAD
  return nombre+" "+apellido;
=======
  const newString = nombre + " " + apellido;
  return newString;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola "+nombre+"!";
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
<<<<<<< HEAD
  const area = (alto * ancho);
=======
  const area = alto * ancho;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
  return area;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
<<<<<<< HEAD
  const perimetro = 2 * (lado + lado);
  return perimetro;
=======
  return 2 * (lado + lado);
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
<<<<<<< HEAD
  const areaTriangulo = (base * altura) / 2;
  return areaTriangulo;

=======
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
<<<<<<< HEAD
  return euro * 1.20;
=======
  let cambio = euro * 1.20;
  return cambio;
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
<<<<<<< HEAD

   if (letra.length > 1) {
     return "Dato incorrecto";
   }
  if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
      return "Es vocal";
  }else{
   return "Dato incorrecto";
  }
 
=======
 
//   if(letra.length > 1){
//    return "Dato incorrecto";
//   }
 
//Version Diferente...
//    switch (letra) {
//     case letra.length > 1:
//       return "Dato incorrecto";
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//       return "Es vocal";
//     default:
//       return "Dato incorrecto";
//   }

   if(letra.length > 1){
      return "Dato incorrecto";
   }else if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
      return "Es vocal";
   }else{
      return "Dato incorrecto";
   }
  
>>>>>>> 9aed8c9323e6e3d2011c752eb2d96a19695def1a
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};

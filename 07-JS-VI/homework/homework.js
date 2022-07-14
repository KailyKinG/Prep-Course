// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return (nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1));
}
//console.log(mayuscula("contanza"));



function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

/*
function decirHelloWorld(){
   console.log("Hello World!");
}
invocarCallback(decirHelloWorld); //Hello World!
*/




function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

/*
function sumados(n1, n2){
   console.log(n1 + n2);
}
function dividir(n1, n2) {
   console.log(n1 / n2);   
}
operacionMatematica(12, 6, sumados); //18
operacionMatematica(6, 2, dividir); //3
*/




function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let suma = numeros.reduce(function (acc, turno) {
    return acc + turno;
  });
  cb(suma);
}

/*
function imprimirEnConsola(dato){
   console.log(dato);
}
sumarArray([1,2,3,6,9], imprimirEnConsola);
*/



function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function (elem) {
    cb(elem);
  });
}

/*
function sumarUno(dato){
   console.log(dato + 1);
}
forEach([2,3,4,5,6], sumarUno);
*/



function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
    const newArray = [];
    array.map(function (elem) {
      newArray.push(cb(elem));
    });
    return newArray;
}

/*
function multiplicarPorDos(dato){
   return dato * 2;
}
const result = map([1,2,3,4,5,6,7], multiplicarPorDos);
console.log(result); //[ 2, 4, 6, 8, 10, 12, 14 ]
*/




function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  const newArray = array.filter((elem) => elem.charAt(0) === "A" || elem.charAt(0) === "a");
  return newArray;
}
//console.log(filter(["Ana","Cama","Almendro","tabla", "amigas"]));



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
     const claves = Object.keys(objeto);
     const newArray = claves.map((elem) => [elem, objeto[elem]]);
     return newArray;
}

/*
const aspirante = {
  nombre: "KailyKinG EDK",
  ubicacion: "Desconocida",
  sueldoEsperado: 10000,
  almuerzo: "Carbonada",
};
console.log(deObjetoAmatriz(aspirante));
/*
[ [ 'nombre', 'KailyKinG EDK' ],
  [ 'ubicacion', 'Desconocida' ],
  [ 'sueldoEsperado', 10000 ],
  [ 'almuerzo', 'Carbonada' ] ]
*/






function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
     string = string.toLowerCase().replaceAll(" ", "");
     const objetote = {};
     for (let elem of string) {
       let count = 0;
       for (let i = 0; i < string.length; i++) {
         if (elem === string[i]) count++;
       }
       objetote[elem] = count;
     }
     return objetote;
}
//console.log(numberOfCharacters("Caracteristicas")); 
//{ c: 3, a: 3, r: 2, t: 2, e: 1, i: 2, s: 2 }




function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
     s = s.replaceAll(" ", "");
     const mayusCadena = [];
     const minusCadena = [];
     for (let elem of s) {
       if (elem === elem.toUpperCase()) {
         mayusCadena.push(elem);
       } else {
         minusCadena.push(elem);
       }
     }
     return (s = mayusCadena.join("") + minusCadena.join(""));
}
// console.log(capToFront("poder MAXIMO"));
// MAXIMOpoder





function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  str = str.split(" ");
  const newCadena = [];
  for (let elem of str) {
    const palabra = [];
    for (let letra of elem) {
      palabra.unshift(letra);
    }
    if (elem === str[str.length - 1]) {
      newCadena.push(palabra);
    } else {
      newCadena.push(palabra + " ");
    }
  }
  return newCadena.join("").replaceAll(",", "");
} 

//console.log(asAmirror("Hola Como Estan Hoy"));





function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const num = numero.toString().split("");
  const dato = [];
  for (let elem of num) {
    dato.unshift(elem);
  }
  if (dato.join("") == numero) return "Es capicua";
  return "No es capicua";
}
// console.log(capicua(1002));
// No es capicua




function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    cadena = cadena.toLowerCase();
    const newArray = [];
    let count = 0;
    if (cadena.includes("a") || cadena.includes("b") || cadena.includes("c")) {
      for (let elem of cadena) {
        if (elem === "a" || elem === "b" || elem === "c") {
          newArray.unshift(elem);
          count++;
        } else {
          newArray.push(elem);
        }
      }
      newArray.splice(0, count);
      return newArray.join("");
    } else {
      return cadena;
    }
}

// console.log(deleteAbc("PatrociBares"));
// ptroires




function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
     arr.sort((a, b) => {
       if (a.length > b.length) {
         return 1;
       } else if (a.length < b.length) {
         return -1;
       } else {
         return 0;
       }
     });
     return arr;
}
// console.log(sortArray(["Hola", "Como", "Estan", "Hoy"]));
// [ 'Hoy', 'Hola', 'Como', 'Estan' ]




function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
    const newArray = [];
    for (let elem of arreglo1) {
      for (let dato of arreglo2) {
        if (elem === dato) newArray.push(dato);
      }
    }
    let result = new Set(newArray);
    result = Array.from(result);
    result.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
    return result;
}
// console.log(buscoInterseccion([2,6,1,6,2], [2,4,1,2,1,1,1]));
// [ 1, 2 ]





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


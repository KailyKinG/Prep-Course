// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
       function Usuario(opciones) {
         this.usuario = opciones.usuario;
         this.nombre = opciones.nombre;
         this.email = opciones.email;
         this.password = opciones.password;
       }

       Usuario.prototype.saludar = function () {
         return "Hola, mi nombre es " + this.nombre;
       };
       return Usuario;
}

/*
  const Usuario = crearUsuario();

  let user1 = new Usuario({usuario: "FT-29c__Dosk", nombre:"KailyKinG", email: "example@example.com", password: "12345678910K"});
  user1;

  let user2 = new Usuario({usuario: "Camaleon", nombre: "Lyna", email: "example@example.com", password: "67122433K"});
  console.log(user2);
  console.log(user2.saludar());
*/




function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function(){
   return "Hello World!";
  }
}

/*
function Camaleon(){
   this.Camaleon = true;
}
agregarMetodoPrototype(Camaleon);
const example = new Camaleon();
console.log(example.saludar());
console.log(example.decirAdios());
*/



function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
    String.prototype.reverse = function () {
      const newWord = [];
      for (let i = 0; i < this.length; i++) {
        newWord.unshift(this.charAt(i));
      }
      return newWord.join("");
    };
}

/* 
 agregarStringInvertida();
 let word = new String("Tetonas");
 console.log(word.reverse());
*/




// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.docimilio = domicilio;
    }

    detalle(){
        return {Nombre: this.nombre, Apellido: this.apellido, Edad: this.edad, Domicilio: this.docimilio,};
      }
    }


function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
   let user = new Persona(nombre, apellido, edad, dir);
   return user;
}

/*
const newPerson = crearInstanciaPersona("Juan", "Perez", 22, "Saavedra 123");
console.log(newPerson.detalle());
*/


  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(){
   return this.nombre+", "+this.edad+" años";
  }
}
  
/*
   agregarMetodo();
   console.log(newPerson.datos());
*/



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};

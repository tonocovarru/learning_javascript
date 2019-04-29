/*function cifradoCesar(word){
    return word.split("").map(function (element){
        return String.fromCharCode(element.charCodeAt(0) + 7);
    }).join("");

}

//console.log(cifradoCesar("hola"));


function printTree(number){
    for(var i=0;i<number;i++){
        console.log("* \n");
    }
}


var numberArray = [1,2,3,4,5];

var new_number_array = numberArray.map(function(element,index,array){
    return element * 3;
});


//Aplicando filter devolver solo los numeros pares dentro del new_number_array

function ObtenerPares(numberArray){
return numberArray.filter(function(element){
    return element % 2 === 0;
});
}


new_number_array = ObtenerPares(numberArray);

console.log("Arreglo Original", numberArray);
console.log("Nuevo Arrego: ", new_number_array);


// Ejercicio uno
//    #
//  ##
// ###
// Subir al git los ejercios
// Factorial de un número 5*4*3*2*1



//
*/
/*
var koders_array = [
    {
      'nombre': 'David',
      'edad': 22,
      'genero': 'M',
      'hobbies': [
        'Fotografia',
        'Viajar'
      ]
    },
    {
      'nombre': 'Jorge',
      'edad': 23,
      'genero': 'M',
      'hobbies': [
        'Videojuegos',
        'Lectura',
        'Dibujar'
      ]
    },
    {
      'nombre': 'Erick',
      'edad': 25,
      'genero': 'M',
      'hobbies': [
        'Caligrafia',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Diana',
      'edad': 27,
      'genero': 'F',
      'hobbies': [
        'Hardware',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Rodo',
      'edad': 32,
      'genero': 'M',
      'hobbies': [
        'Musica',
        'Programacion'
      ]
    }
  ]



  function printAllCoders(){
      for(var i=0;i<koders_array.length;i++){
          console.log(koders_array[i].nombre + " - " + koders_array[i].hobbies);
      }
  }

  function printAllCodersHobbies(){
    for(var i=0;i<koders_array.length;i++){
        console.log("Hola soy " + koders_array[i].nombre + " y mis hobbies son " + koders_array[i].hobbies);
    }
}


printAllCodersHobbies();

  function printKoderGamers(){
    return koders_array.filter(function(element){
        return element.hobbies.indexOf('Videojuegos')>=0;
    });
  }
  
  console.log(printKoderGamers());
*/



  var numbers_array = [1,2,3,4,5,6];

  numbers_array.forEach(function(element){
      console.log("elemento -> ", element);
  });

//Por eficiencia, es mejor el for in
  for(element in numbers_array){
      console.log(element);
  }


  //Operador Ternario, nos sirve para hacer condicionales
  
  var x = 2;
  var y = 2;

  var results = (x ===y) ? 'Si son iguales': 'No son iguales';


  // Return


  function greetings (){
      console.log("Holaa");
  }

  function returnGreeting(){
      return "Hola";
  }

  var g = returnGreeting() + ' Diana';

  console.log(g);




  var persons_array = [
      {nombre:"Jose",
       apellido_paterno: "Covarrubias",
       apellido_materno: "Ponce",
       genero: "Masculino",
       fecha_nacimiento: "15-06-1974"
      },
      {nombre:"Manuel",
       apellido_paterno: "Perez",
       apellido_materno: "Linares",
       genero: "Masculino",
       fecha_nacimiento: "20-02-1986"
      },      
      {nombre:"Diana",
       apellido_paterno: "Trujillo",
       apellido_materno: "Linares",
       genero: "Femenino",
       fecha_nacimiento: "27-12-1989"
      },     
      {nombre:"Karen",
       apellido_paterno: "Zarco",
       apellido_materno: "Olivares",
       genero: "Femenino",
       fecha_nacimiento: "02-09-1980"
      }       
  ];

  function obtieneCurp(person){
      return person.apellido_paterno.substr(0,2).toUpperCase() + person.apellido_materno.substr(0,1).toUpperCase() + person.nombre.substr(0,1).toUpperCase()+person.fecha_nacimiento.substr(8,4)+person.fecha_nacimiento.substr(3,2)+person.fecha_nacimiento.substr(0,2)+(person.genero==="Masculino"?"H":"M") ;
  }



  function Person(nombre, apellido_materno, apellido_paterno, genero, fecha_nacimiento){
      this.nombre = nombre;
      this.apellido_materno = apellido_materno;
      this.apellido_paterno = apellido_paterno;
      this.genero = genero;
      this.fecha_nacimiento = fecha_nacimiento;
      this.curp = function (){
        return this.apellido_paterno.substr(0,2).toUpperCase() + this.apellido_materno.substr(0,1).toUpperCase() + this.nombre.substr(0,1).toUpperCase()+this.fecha_nacimiento.substr(8,4)+this.fecha_nacimiento.substr(3,2)+this.fecha_nacimiento.substr(0,2)+(this.genero==="Masculino"?"H":"M") ;
      }
  }

  console.log(obtieneCurp(persons_array[0]));

  var pedrito = new Person("Pedro","Martinez","Martinez","Masculino","01-01-1980");

  console.log(pedrito);
  console.log(pedrito.curp());


  // array de array, en cada posicion del arreglo, va una propiedad de automovil
  // Kia, Rojo, etc
  // Ford, Azul, Etc.
  // todos los carros, consultar su precio, saber si es automatico o manual y modelo completo -> todas las caracteristicas


      // Fabricante, Modelo, AÑO, Transmision, Precio, Color, Pais Origen

  var autos_array = [
      ["FORD","FOCUS","2019","MANUAL", 230000,"AZUL","ESTADOS UNIDOS"],
      ["VW","BEETLE","2019","AUTOMATICA",300000,"GRIS","MEXICO"],
      ["HONDA","CITY","2019","AUTOMATICA",230000,"BLANCO","MEXICO"],
      ["AUDI","A4","2019","AUTOMATICA",400000,"NEGRO","ALEMANIA"],
      ["KIA","FORTE","2018","AUTOMATICA",350000,"ROJO","COREA"],
      ["NISSAN","SENTRA","2017","MANUAL",180000,"GRIS","BRASIL"]
  ];

  function auto(fabricante,modelo,anio,transmision,precio,color,pais_origen){
      this.fabricante = fabricante;
      this.modelo = modelo;
      this.anio = anio;
      this.transmision = transmision;
      this.precio = precio;
      this.color = color;
      this.pais_origen = pais_origen;
      this.obtenerPrecio = function(){
          return "El " +this.modelo + " tiene un precio de  $" + this.precio;
      };
      this.obtenerTransmision = function(){
          return "El " + this.modelo + " tiene una transmisión " + this.transmision;
      };
      this.obtenerCaracteristicas = function(){
          return "El detalle del " + this.modelo + " es: " + this.fabricante + " " + this.modelo + " " + this.anio + " " + this.color + " " + this.pais_origen;
      }
  }
  
  var autosObj = [];
  for(element of autos_array){
     autosObj[autosObj.length] = new auto(element[0],element[1],element[2],element[3],element[4],element[5],element[6]);
 }


  for(var i=0;i<autosObj.length;i++){
      console.log(autosObj[i].fabricante + " - " + autosObj[i].obtenerCaracteristicas());
  }
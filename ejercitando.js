/*1.- Escriba una función flecha que permita comparar si un objeto tiene todas sus 
propiedades contenidas en un segundo objeto. 
Ejemplo: 
contiene({ pelo: 'largo', barba: false },{ edad: 25, pelo: 'largo', barba: true }); // true 
contiene({ edad: 25, pelo: 'largo', barba: true },{ pelo: 'largo', barba: true },); //false 
 Pruebe su funcionamiento en la consola del navegador 
 Agregue la función como un script externo en una página web y pruebe su 
funcionamiento.*/
/*let personaA={pelo : "largo",barba : false};
let personaB={pelo:"largo",barba:true,edad:25};
let f=(a,b)=>{
    for(let aux in a){
        if(!b.hasOwnProperty(aux)){
            return false;
        }
    }
    return true;
};
console.log(f(personaA,personaB));
console.log(f(personaB,personaA));*/
/*2.- Escriba un programa javascript que muestre en una página la fecha y hora en tiempo 
real. 
El formato de la fecha debe ser: 
Hoy es Jueves, 22 de Marzo de 1998 
La hora actual es 8:23:05 PM 
Utilice los template literals para imprimir los datos. 
Ej: innerHTML = (`La hora actual es : ${hora}:${minuto}:${segundo} ${pmam}`); 
Nota: Averigue como funciona la función toLocaleDateString*/
/*let divP=document.getElementById("principal");
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");*/
/*const fecha = new Date();
const fechaLocalString = fecha.toLocaleDateString();
const options = {
  hour12: true, // Esto asegura que la hora se muestre en formato de 12 horas (AM/PM)
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

const hora = fecha.toLocaleTimeString('es-ES', options);
const diaSemana = fecha.toLocaleDateString('es-ES', { weekday: 'long' }); // 'long' para obtener el nombre completo del día
const mes = fecha.toLocaleDateString('es-ES', { month: 'long' }); // 'long' para obtener el nombre completo del mes

/*console.log('Hora:', hora);
console.log('Día de la semana:', diaSemana);
console.log('Mes:', mes);
console.log(fechaLocalString); // Salida dependerá de la zona horaria local
div1.innerHTML=(`Hoy es ${diaSemana} ,${fecha.getDate()} de ${mes} de ${fecha.getFullYear()}`);
div2.innerHTML=(`La hor es ${hora}`);*/
/*4.- Que es lo que realiza la siguiente función. 
const reverseString = str => [...str].reverse().join(''); 
Compruebe su funcionamiento.*/
//const reverseString = str => [...str].reverse().join('-');
//console.log(reverseString("HOLA MUNDO"));
/*5.- Refactorize el siguiente código utilizando sintaxis ES6 (Use rest y arrow función) 
function filterOutOdds() { 
 var nums = Array.prototype.slice.call(arguments); 
 return nums.filter(function(num) { 
 return num % 2 === 0 
 }); 
}*/ 
/*function filterOutOdds() { 
    var nums = Array.prototype.slice.call(arguments); 
    return nums.filter(function(num) { 
    return num % 2 === 0 
    }); 
   };
   let filterPares=(...nums) => nums.filter(numero=>numero%2===0);
   console.log(filterOutOdds(1,2,3,4,5,6,7,8,9));
   console.log(filterPares(1,2,3,4,5,6,7,8,9));*/
   /*6.- Escriba una función buscarMinimo que acepte un número variable de argumentos y 
retorne el valor mas chico. */
/*let buscarMunimo=(...nums)=>{
    var aux=nums[0];
    for(let actual of nums){
        if(actual<aux){
            aux=actual;
        }
    }
    return aux;
}
console.log(buscarMunimo(8,9,3,4,5,6,7));*/
/*7.- Escriba una función potenciarYRetornarArgumentos() que acepte un array y un número 
variable de argumentos. La función debe retornar un nuevo array con los valores del array 
original además de los argumentos pasados elevados al cuadrado. 
Ej. 
potenciarYRetornarArgumentos ([1,2,3],4,8) // [1,2,3,16,64] 
potenciarYRetornarArgumentos ([2],10,4) // [2, 100, 16] */
/*let potenciarYRetornarArgumentos=(arr,...nums)=>{
    for(let numero of nums){
        arr.push(Math.pow(numero,2));
    }
    return arr;
}
console.log(potenciarYRetornarArgumentos ([2],10,4) );*/
/*8.- Desarrolle un formulario que solicite Año, Valor de inflación y Suceso. 
Controle que año este entre 1900 y 2020. 
Controle que Valor de inflación sea mayor a 0 y tenga 2 decimales. 
Controle que suceso sea una cadena de hasta 20 caracteres. 
Agregue un botón que permita cargar los valores en un array de objetos. 
Agregue 3 botones que permitan imprimir un listado de los datos ordenados por Año, por 
inflación y por Suceso.*/
/*let suceso=document.getElementById("suceso");
let anio=document.getElementById("año");
let inflacion=document.getElementById("inflacion");
let datos=[];
let div2=document.getElementById("div2");
let miFormulario=document.getElementById("miFormulario");
let bandera;
suceso.focus();
function cargar(){
    if(verificar()){
        datos.push({suceso:suceso.value,anio:anio.value,inflacion:inflacion.value});
        limpiar();
        console.log(datos);

    }
    
} 
function verificar(){
    bandera=true;
     if(anio.value<1900||anio.value>2020){
        alert("El año debe ser despues de 1900 y antes de 2024");
        anio.focus();
        bandera = false;
    }
    if(suceso.value.length>20){
        alert("El suceso debe contener hasta 20 caracteres");
        suceso.focus();
        bandera = false;
    }
    var regex = /^\d+(\.\d{2})?$/; // Expresión regular para dos decimales
    if(inflacion.value<0||!regex.test(inflacion.value)){
        alert("La inflacion debe ser mayor a 0 y tener 2 decimales");
        inflacion.focus();
        bandera = false;
    }
    return bandera;
}
function ordenA(){
    let aux=datos;
    aux.sort((a,b)=>a.anio - b.anio);
    listar(aux);
}
function ordenI(){
    let aux=datos;
    aux.sort((a,b)=>a.inflacion-b.inflacion);
    listar(aux);
}
function ordenS(){
   let aux=datos;
   aux.sort((a, b) => {
    return a.suceso.localeCompare(b.suceso);
  });
  
   listar(aux);
}
function listar(aux){
    limpiarDiv();
    for(let c of aux){
        let d = `Suceso: ${c.suceso} , Año: ${c.anio} , Inflcion: ${c.inflacion}`;

        // Crear un elemento de párrafo
        const nuevoParrafo = document.createElement("p");

        // Crear un nodo de texto con la cadena 'd'
        const textoNodo = document.createTextNode(d);

       // Agregar el nodo de texto al elemento <p>
        nuevoParrafo.appendChild(textoNodo);

       // Agregar el elemento <p> al div
       div2.appendChild(nuevoParrafo);

    }
}function limpiar(){
    miFormulario.reset();
}
function limpiarDiv(){
    while (div2.firstChild) {
        div2.removeChild(div2.firstChild);
    }
}*/
/*let palabras=["arbol" , "banana" , "cascara", "dedo" ,"frio","gracias","arena","ardilla","acacia" ];
let div2=document.getElementById("div2");
var input = document.getElementById('ingreso');
input.focus();
let palabraSeleccionada;
// Agregar un event listener para el evento 'input'
input.addEventListener('input', function() {
    // Obtener el valor del campo de entrada
    var valor = input.value;

    // Verificar si el valor no está vacío
    if (valor.length > 0) {
        // Obtener las  letras del valor
        var primeraLetra = valor.toLowerCase();
        console.log("Primera letra ingresada: " + primeraLetra);
    }
    var opciones=palabras.filter(item => item.startsWith(primeraLetra));
    console.log(opciones);
    while(div2.firstChild){
        div2.removeChild(div2.firstChild);
    }
    for(let i of opciones){
        parrafo=document.createElement("p");
        nodo=document.createTextNode(i);
        parrafo.appendChild(nodo);
        div2.appendChild(parrafo);
        parrafo.addEventListener("click", function(event){
            let parrafoClickeado=event.target;
            let palabra=parrafoClickeado.textContent;
            console.log(palabra);
            input.value=palabra;
    }); 
    };
    
       
});
input.addEventListener("click",function(){
    palabraSeleccionada=input.value;
    console.log(`Usted selecciono : ${palabraSeleccionada}`);
  });*/
 /* 1.- Construir 2 clases (Persona y Empleado) 
Persona debe tener: 
 nombre (pública) 
 edad (pública) 
 altura (privada) 
 peso (privada) 
Empleado es una persona y tiene un sueldo (privado). 
Ambas clases deben tener un método público que permita imprimir un resumen de su 
información. 
Cree instancias de las clases y compruebe su funcionamiento. 
Compruebe el polimorfismo creando una función que reciba por parámetro cualquiera de 
los objetos e imprima su información. 
Agregue un método a la clase Empleado que permita llevar la cantidad de instancias 
creadas.*/

    
    
   /*class Persona {
    constructor(nombre,edad,altura,peso) {
        this.nombre=nombre;
        this.edad=edad;
        let _altura= altura;
        let _peso= peso; 
        this.mostrar=function(){
            console.log(`Nombre : ${this.nombre} , Edad: ${this.edad} , Altura: ${_altura} , Peso: ${_peso} ` ); 
     }
     
    }
}
class Empleado extends Persona{
    static cantidad=0;//atriburo que pertenece a la clase y no a los ojetos creados
    constructor(nombre,edad,altura,peso,sueldo){   
        super(nombre,edad,altura,peso);
        let _sueldo=sueldo;
        // Incrementar la cantidad de empleados cada vez que se crea una instancia
        Empleado.cantidad++;
       this.mostrar =function () {
            console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Altura: ${altura}, Peso: ${peso}, Sueldo: ${_sueldo}`);
        }
    }
    static fromPersona(persona, sueldo) {
        return new Empleado(persona.nombre, persona.edad,persona._altura, persona._peso, sueldo);
    }

}
Ale=new Persona("Alejandro",45,1.70,80);
Juan=new Empleado("Juan",43,1.78,85,300000);
luis=new Empleado("Luis",55,1.56,76,299990);
ale= Empleado.fromPersona(Ale,276666666);
function ver(objeto){
      objeto.mostrar();
}
ver(Ale);
ver(Juan);
ver(luis);
ver(ale);
console.log(`Se crearon ${Empleado.cantidad} empleados`);*/
/*import{fecha} from "D:\Users\Gabriel\Desktop\ejercitando\fecha.js";
fecha();*/
/*3.- Programe un array listaPersonas que tenga como contenido objetos personas que 
tengan un nombre, apellido, documento, altura y peso. 
Defina una función que retorne dichos objetos. 
Ej. 
let listaPersonas = 
[{nombre:”juan”,apellido:”Gomez”,documento:”22112277”,altura:175,peso:80},{…},{
…}] 
Luego recorra la lista usando un bucle for para imprimir el nombre y apellido de cada 
persona. 
Realice el mismo procedimiento usando los bucles for..in, for..of y forEach 
Modifique la función creadora de objetos para que los objetos creados incorporen una 
función que retorne el índice de masa corporal (IMC). 
 
Vuelva a recorrer la lista de personas imprimiendo también el IMC.*/
/*let listaPersonas = 
[{nombre:"juan",apellido:"Gomez",documento:"22112277",altura:175,peso:80},
{nombre:"Alejandro",apellido:"Rubira",documento:"26833093",altura:170,peso:81},
{nombre:"Luis",apellido:"Garcia",documento:"40319654",altura:165,peso:85}];
let retornar=personas=>{ 
     for(let d of personas){
        d.calcularIMC=function(){
            return d.peso/(Math.pow((d.altura/100),2));
        }
     }
     return personas;
}
retornar(listaPersonas);
/*for( n=0;n<listaPersonas.length;n++){
   console.log(`Nombre: ${listaPersonas[n].nombre} , Apellido: ${listaPersonas[n].apellido}`);
}
console.log(`_________________________________________________________`);
for(let n of listaPersonas){
    console.log(`Nombre: ${n.nombre} , Apellido: ${n. apellido} `);
}
console.log("----------------------------------------------------------");
for(let a in listaPersonas){
    console.log(`Nombre: ${listaPersonas[a].nombre} , Apellido: ${listaPersonas[a].apellido}`);
}*/
/*console.log("**********************************************************");
listaPersonas.forEach(elemento=>{
    console.log(`Nombre: ${elemento.nombre} , Apellido: ${elemento.apellido} , IMC: ${elemento.calcularIMC()}`);
})*/
/*let array=["ana","jose","juana","ana","luis","jose"];

let arrayNoRepetido= new Set(array);
console.log(arrayNoRepetido);

let array2 = array.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
});
/*La función de callback (valor, indice, self) => { return self.indexOf(valor) === indice; } se pasa al método filter.
Dentro de la función de callback, valor es el elemento actual que está siendo evaluado, 
indice es el índice de ese elemento en el array, y self es el propio array.
La expresión self.indexOf(valor) === indice verifica si el índice del elemento actual
 en el array es igual al índice de la primera aparición del elemento en el array. 
Esto significa que si el índice del elemento actual no es igual al índice de su primera aparición,
 entonces es un elemento repetido y no será incluido en el resultado final.*/
//console.log(array);
/*let libros=[ 
    { 
    "id" : "978-0641723445", 
    "label" : ["book","hardcover"], 
    "name" : "The Lightning Thief", 
    "author" : "Rick Riordan", 
    "series_t" : "Percy Jackson and the Olympians", 
    "genre_s" : "fantasy", 
    "inStock" : true, 
    "price" : 12, 
    "pages_i" : 384 
    } 
    , 
    { 
    "id" : "978-1857995879", 
    "label" : ["book","paperback"], 
    "name" : "Sophie's World : The Greek Philosophers", 
    "author" : "Jostein Gaarder", 
    "genre_s" : "fantasy", 
    "inStock" : true, 
    "price" : 3, 
    "pages_i" : 64 
    } 
    , 
    { 
    "id" : "978-1933988177", 
    "label" : ["Article","paperback"], 
    "name" : "Lucene in Action, Second Edition", 
    "author" : "Michael McCandless", 
    "genre_s" : "IT", 
    "inStock" : true, 
    "price" : 30, 
    "pages_i" : 475 
    } 
    ];
    let div2=document.getElementById("div2");
    let miFormulario=document.getElementById("miFormulario");
    function verTodos(){
        limpiar();
        mostrar(libros);
     
    }

    function agregar(){
        limpiar();
        miFormulario.style.display="block";
    }
    function cargar(){
          // Capturando los valores de los campos del formulario
          var id = document.getElementById("id").value;
          var label = document.getElementById("label").value;
          var name = document.getElementById("name").value;
          var author = document.getElementById("author").value;
          var genre = document.getElementById("genre-s").value;
          var stock = document.querySelector('input[name="stock"]:checked').value === "true";
          var price = parseFloat(document.getElementById("price").value);
          var pages = parseInt(document.getElementById("pages_i").value);
  
          // Creando un objeto con los datos capturados
          var libro = {
              id: id,
              label: label,
              name: name,
              author: author,
              genre_s: genre,
              stock: stock,
              price: price,
              pages_i: pages
          };
          libros.push(libro);
          miFormulario.reset();
          limpiar();
    }
    let sele=document.getElementById("seleccionarPrecio");
    function seleccionarPorPrecio(){
        limpiar();
        
        sele.style.display="block";
        sele.focus();
        sele.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Evita el comportamiento predeterminado de enviar el formulario
                var valorPrecio = parseFloat(this.value); // Obtener el valor del campo de entrada como un número
                // Llamar a la función deseada con el valor del precio
                seleccionar(valorPrecio);
                sele.value="";
                sele.style.display="none";
            }

        });
        ;
    }
    let select=document.getElementById("select");
    function seleccionarPorEtiqueta(){
        limpiar();
        select.style.display="block";
        var opcion=document.createElement("select");
        var etiquetas= new Set();
        for(let a of libros){
               for(let b of a.label){
                etiquetas.add(b);
               }
        }
        for(let c of etiquetas){
            var opcion = document.createElement("option");
            opcion.text = c;
            opcion.value = c;
            select.add(opcion);
        }
        select.addEventListener("change", function() {
        var opcionSeleccionada = select.value;
        seleccionarE(opcionSeleccionada);
        });
    }
    function seleccionarE(opcion){
         let seleccionadosE=libros.filter(obj=>obj.label[0]===opcion||obj.label[1]===opcion);
         mostrar(seleccionadosE);
         select.style.display="none";
    }
    function seleccionar(valorPrecio){
        let seleccionados=libros.filter(obj=>obj.price>valorPrecio);
        mostrar(seleccionados)
        //seleccionados=0;
    }
    function mostrar(libross){
        for(let obj of libross){
            let d = `ID : ${obj.id}
            Etiqueta: ${obj.label}
            Nombre: ${obj.name}
            Autor: ${obj.author}
            Genero: ${obj.genre_s}
            ${obj.inStock ?"Stock Disponible" : "No Hay en Stock"}
            Precio: ${obj.price}
            Paginas: ${obj.pages_i}`;
    
            // Crear un elemento de párrafo
            const nuevoParrafo = document.createElement("p");
    
            // Crear un nodo de texto con la cadena 'd'
            const textoNodo = document.createTextNode(d);
    
           // Agregar el nodo de texto al elemento <p>
            nuevoParrafo.appendChild(textoNodo);
    
           // Agregar el elemento <p> al div
           div2.appendChild(nuevoParrafo);
    
         }
    }
     function limpiar(){
        sele.style.display="none";
        select.style.display="none";
        miFormulario.style.display="none";
        while(div2.firstChild){
            div2.removeChild(div2.firstChild);
        }
     }*/
     const personas = [ 
        { 
        id: 1, 
        datos: { 
        nombre: "Jose", 
        edad: 39, 
        empleado: true, 
        hobbies: ["tenis"], 
        }, 
        }, 
        { 
        id: 2, 
        datos: { 
        nombre: "Manuel", 
        edad: 23, 
        empleado: true, 
        }, 
        }, 
        { 
        id: 3, 
        datos: { 
        nombre: "Abigail", 
        edad: 25, 
        empleado: false, 
        hobbies: ["basquet", "tenis", "futbol"], 
        }, 
        }, 
        { 
        id: 4, 
        datos: { 
        nombre: "Fabiana", 
        edad: 12, 
        empleado: true, 
        hobbies: ["tenis", "golf"], 
        }, 
        }, 
       ]; 
      // let persona3=personas=>personas[2];
       //console.log(persona3(personas));
    /*let sinId=personas=>{
        let aux=[];
        for(let a of personas){
            aux.push(a.datos) ;
        }
        return aux;
    }
    console.log(sinId(personas));*/
    //let mayores24=personas=>personas.filter(obj=>obj.datos.edad>24);
    //console.log(mayores24(personas));
    //d.- Un array de personas ordenado por el nombre de la persona 
    //aux.sort((a, b) => {
     //   return a.suceso.localeCompare(b.suceso);
   /*let ordenadosNombre=personas=>personas.sort((a,b)=>{
          return a.datos.nombre.localeCompare(b.datos.nombre);
   });
   console.log(ordenadosNombre(personas));*/
   //e.- Un array de personas que al menos tenga 2 hobbies 
   /*let hobis=personas=>personas.filter(obj=>obj.datos.hobbies&&obj.datos.hobbies.length>1);
   console.log(hobis(personas));*/
  // f.- Un array con todos los diferentes hobbies que existen en personas
  /*let hobis=personas=>{
    let aux=new Set();
    
    for(let a of personas){
        if(a.datos.hobbies){
            for(let b of a.datos.hobbies){
              aux.add(b);
            }
        }
        
    }
    return [...aux];
  };
  
  console.log(hobis(personas));*/
 // g.- Un array de los nombres de personas que sean empleados.
 let empleados=personas=>{
    let nombres=[];
    let per=personas.filter(obj=>obj.datos.empleado);
    for(let a of per){
        nombres.push(a.datos.nombre);
    }
return nombres;

 }
 console.log(empleados(personas));

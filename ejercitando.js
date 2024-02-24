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
let suceso=document.getElementById("suceso");
let anio=document.getElementById("año");
let inflacion=document.getElementById("inflacion");
let datos=[{}];
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
}




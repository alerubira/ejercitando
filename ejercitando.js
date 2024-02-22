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
let buscarMunimo=(numero1,...nums)=>nums.filter(numero=>numero>numero1);
console.log(buscarMunimo(1,2,3,4,5,6,7));
